'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { useParams } from 'next/navigation';
import { useGetBlogPeriod } from '@/hooks/dashboard';
import { useRecoilState } from 'recoil';
import { endDateState, startDateState } from '@/recoil/atom/dashboard';

interface DataPoint {
  date: Date;
  value: number;
}

const Chart: React.FC = () => {
  const { team, articleId } = useParams();

  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);

  // useGetBlogPeriod 훅 사용
  const apiData = useGetBlogPeriod(String(team), String(startDate), String(endDate));
  const [data, setData] = useState<DataPoint[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 날짜, 뷰(value)값 호출 -> useState(data)에 담아서 띄우기
  useEffect(() => {
    if (apiData && apiData.data.rows) {
      const transformedData: DataPoint[] = apiData.data.rows.map((row: any) => ({
        date: new Date(row.date), // Date 객체로 변환
        value: row.views,
      }));
      setData(transformedData);
      console.log(transformedData);
    }
  }, [apiData]);

  // 그래프 그리는 로직 & 스타일
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

      d3.select(svgRef.current).selectAll('*').remove(); // 기존의 차트를 제거

      const svg = d3.select(svgRef.current);

      // line 함수 생성
      const valueline = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      // 색상 구역 설정
      const area = d3
        .area<DataPoint>()
        .x((d) => x(d.date))
        .y0(height - margin.bottom)
        .y1((d) => y(d.value));

      // 그라데이션 추가
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

      // Add y-축
      svg
        .append('g')
        .call(
          d3
            .axisLeft(y) // y축 텍스트
            .ticks(5)
            .tickSize(-width + margin.left + margin.right),
        )
        .attr('transform', `translate(${margin.left},0)`)
        .call((g) => g.select('.domain').remove())
        .selectAll('line')
        .attr('stroke', 'lightgrey')
        .attr('stroke-dasharray', '2,2');

      // Hide y-축
      svg.selectAll('.tick text').style('display', 'none');

      const formatTime = d3.timeFormat('%Y.%m.%d');

      const xTicks = [
        data[0].date, // 첫 번째 날짜
        data[Math.floor(data.length / 2)].date, // 중간 날짜
        data[data.length - 1].date, // 마지막 날짜
      ];

      // Add x-축
      svg
        .append('g')
        .attr('class', 'x-axis')
        .call(
          d3
            .axisBottom<Date | d3.NumberValue>(x)
            .tickValues(xTicks)
            .tickFormat((d) => formatTime(d as Date)),
        ) // x축 텍스트
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .select('.domain')
        .attr('stroke', 'none')
        .attr('stroke-width', 1)
        .style('stroke-linecap', 'square');

      // x축 선-> 통계 선
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#50B15B')
        .attr('stroke-width', 2)
        .attr('d', valueline);

      // Hide x축의 모든 tick line
      svg.selectAll('.x-axis .tick line').style('stroke', 'none');
      // 마지막 tick line만 숨기기
      svg
        .selectAll('.x-axis .tick')
        .filter(function () {
          return this === svg.selectAll('.x-axis .tick').nodes().pop();
        })
        .select('line')
        .style('stroke', 'none');

      // x축 채우기
      svg.append('path').datum(data).attr('fill', 'url(#line-gradient)').attr('d', area);

      // 툴팁 요소 추가
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

      const hoverTime = d3.timeFormat('%m.%d');

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'transparent')
        .attr('stroke-width', 10) // 선의 두께를 증가 이유 : 이벤트 감지
        .attr('d', valueline)
        .on('mouseover', function (event) {
          const [xPos, yPos] = d3.pointer(event);
          const hoveredDate = x.invert(xPos) as Date;
          const formatHoverTime = d3.timeFormat('%-m월 %-d일');
          const formattedHoveredDate = formatHoverTime(hoveredDate);

          // 가장 가까운 데이터 포인트 찾기
          const dataPoint = data.reduce((prev, curr) => {
            return Math.abs(curr.date.getTime() - hoveredDate.getTime()) <
              Math.abs(prev.date.getTime() - hoveredDate.getTime())
              ? curr
              : prev;
          });

          // 호버 툴팁 위치, 스타일 조정
          tooltip
            .style('display', 'block')
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY - 10}px`)
            .html(
              `<div style="font-weight: bold; font-size: 14px; margin-bottom: 16px;">${formattedHoveredDate}</div>` +
                `<div style="font-size: 12px; color: #555; display: flex; justify-content: space-between; margin-bottom: 9.5px;">당일 방문자 수<div>${dataPoint.value}</div></div>` +
                `<div style="font-size: 12px; color: #555; display: flex; justify-content: space-between;">전월 대비<div>10%</div></div>`,
            );

          // 호버시 위치 표시 동그라미
          svg
            .append('circle')
            .attr('class', 'tooltip-circle')
            .attr('cx', x(dataPoint.date))
            .attr('cy', y(dataPoint.value))
            .attr('r', 5)
            .attr('fill', '#50B15B');
        })
        .on('mousemove', function (event) {
          tooltip.style('left', `${event.pageX + 10}px`).style('top', `${event.pageY - 10}px`);
        })
        .on('mouseout', () => {
          tooltip.style('display', 'none');
          svg.selectAll('.tooltip-circle').remove();
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
