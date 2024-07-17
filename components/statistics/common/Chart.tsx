'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { useParams } from 'next/navigation';
import { useGetBlogPeriod } from '@/hooks/dashboard';
import { useRecoilState } from 'recoil';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';
import { ArticlePeriodProps } from '@/types/dashboard';

interface DataPoint {
  date: Date;
  value: number;
  rate?: number;
}

interface ChartDetailProps {
  statisticValue: string;
  articleChartData?: ArticlePeriodProps;
}

const Chart: React.FC<ChartDetailProps> = ({ statisticValue, articleChartData }) => {
  const { team, articleId } = useParams();

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);

  const apiData = useGetBlogPeriod(String(team), String(startDate), String(endDate));
  const [data, setData] = useState<DataPoint[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (apiData && apiData.data.rows && statisticValue === 'visitant') {
      const transformedData: DataPoint[] = apiData.data.rows.map((blogRow) => ({
        date: new Date(blogRow.date),
        value: blogRow.views,
        rate: blogRow.rate,
      }));
      setData(transformedData);
    } else if (articleChartData && articleChartData.summary && statisticValue !== 'visitant') {
      const transformedData: DataPoint[] = articleChartData.period.rows.map((articleRow) => ({
        date: new Date(articleRow.date),
        value: articleRow.views,
        rate: articleRow.rate,
      }));
      setData(transformedData);
    }
  }, [apiData, articleChartData, statisticValue]);

  const drawChart = useCallback(() => {
    if (svgRef.current && containerRef.current && data.length > 0) {
      const containerWidth = containerRef.current.clientWidth;
      const width = containerWidth;
      const height = 222;
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };

      const x = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date) as [Date, Date])
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)!])
        .nice()
        .range([height - margin.bottom, margin.top]);

      d3.select(svgRef.current).selectAll('*').remove();

      const svg = d3.select(svgRef.current);

      const valueline = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      const area = d3
        .area<DataPoint>()
        .x((d) => x(d.date))
        .y0(height - margin.bottom)
        .y1((d) => y(d.value));

      const gradient = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'line-gradient')
        .attr('x1', '0%')
        .attr('y1', '100%')
        .attr('x2', '0%')
        .attr('y2', '0%');

      gradient.append('stop').attr('offset', '-6.93%').attr('stop-color', 'rgba(80, 177, 91, 0.00)');
      gradient.append('stop').attr('offset', '97.03%').attr('stop-color', 'rgba(80, 177, 91, 0.10)');

      svg
        .append('g')
        .call(
          d3
            .axisLeft(y)
            .ticks(5)
            .tickSize(-width + margin.left + margin.right),
        )
        .attr('transform', `translate(${margin.left},0)`)
        .call((g) => g.select('.domain').remove())
        .selectAll('line')
        .attr('stroke', 'lightgrey')
        .attr('stroke-dasharray', '2,2');

      svg.selectAll('.tick text').style('display', 'none');

      const formatTime = d3.timeFormat('%Y.%m.%d');

      const xTicks = [data[0].date, data[Math.floor(data.length / 2)].date, data[data.length - 1].date];

      svg
        .append('g')
        .attr('class', 'x-axis')
        .call(
          d3
            .axisBottom<Date | d3.NumberValue>(x)
            .tickValues(xTicks)
            .tickFormat((d) => formatTime(d as Date)),
        )
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .select('.domain')
        .attr('stroke', 'none')
        .attr('stroke-width', 1)
        .style('stroke-linecap', 'square');

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#50B15B')
        .attr('stroke-width', 2)
        .attr('d', valueline);

      svg.selectAll('.x-axis .tick line').style('stroke', 'none');
      svg
        .selectAll('.x-axis .tick')
        .filter(function () {
          return this === svg.selectAll('.x-axis .tick').nodes().pop();
        })
        .select('line')
        .style('stroke', 'none');

      svg.append('path').datum(data).attr('fill', 'url(#line-gradient)').attr('d', area);

      const tooltip = d3
        .select(containerRef.current)
        .append('div')
        .style('position', 'absolute')
        .style('width', '176px')
        .style('height', '104px')
        .style('align-items', 'center')
        .style('background', '#fff')
        .style('border', '1px solid #ccc')
        .style('padding', '16px')
        .style('display', 'none')
        .style('pointer-events', 'none')
        .style('border-radius', '4px')
        .style('box-shadow', '0 3px 5px 0 rgba(33, 33, 33, 0.05)');

      // 마우스 오버 선 추가
      const mouseLine = svg
        .append('line')
        .attr('class', 'mouse-line')
        .attr('stroke', 'gray')
        .attr('stroke-width', 1)
        .attr('opacity', 0);

      svg
        .append('rect')
        .attr('width', width)
        .attr('height', height)
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .on('mouseover', function (event) {
          tooltip.style('display', 'block');
          mouseLine.attr('opacity', 1);
        })
        .on('mousemove', function (event) {
          const [xPos] = d3.pointer(event);
          const hoveredDate = x.invert(xPos) as Date;
          const formatHoverTime = d3.timeFormat('%-m월 %-d일');
          const formattedHoveredDate = formatHoverTime(hoveredDate);

          const dataPoint = data.reduce((prev, curr) => {
            return Math.abs(curr.date.getTime() - hoveredDate.getTime()) <
              Math.abs(prev.date.getTime() - hoveredDate.getTime())
              ? curr
              : prev;
          });

          tooltip
            .style('left', `${event.pageX - 100}px`)
            .style('top', `${event.pageY - 100}px`)
            .html(
              `<div style="font-weight: bold; font-size: 14px; margin-bottom: 16px;">${formattedHoveredDate}</div>` +
                `<div style="font-size: 12px; color: #555; display: flex; justify-content: space-between; margin-bottom: 9.5px;">당일 방문자 수<div>${dataPoint.value}</div></div>` +
                `<div style="font-size: 12px; color: #555; display: flex; justify-content: space-between;">전월 대비<div>${dataPoint.rate}%</div></div>`,
            );

          svg.selectAll('.tooltip-circle').remove();
          svg
            .append('circle')
            .attr('class', 'tooltip-circle')
            .attr('cx', x(dataPoint.date))
            .attr('cy', y(dataPoint.value))
            .attr('r', 5)
            .attr('fill', '#50B15B');

          mouseLine
            .attr('x1', x(dataPoint.date))
            .attr('x2', x(dataPoint.date))
            .attr('y1', 0)
            .attr('y2', height - margin.bottom);
        })
        .on('mouseout', () => {
          tooltip.style('display', 'none');
          svg.selectAll('.tooltip-circle').remove();
          mouseLine.attr('opacity', 0);
        });
    }
  }, [data]);

  useEffect(() => {
    drawChart();
    window.addEventListener('resize', drawChart);
    return () => {
      window.removeEventListener('resize', drawChart);
    };
  }, [drawChart]);

  return (
    <div ref={containerRef} style={{ marginLeft: '-4rem', width: '100%' }}>
      <svg ref={svgRef} width="100%" height={222}></svg>
    </div>
  );
};

export default Chart;
