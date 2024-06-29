// pages/index.tsx
import React, { useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  date: Date;
  value: number;
}

const data: DataPoint[] = [
  { date: new Date(2023, 0, 1), value: 30 },
  { date: new Date(2023, 0, 2), value: 50 },
  { date: new Date(2023, 0, 3), value: 45 },
  { date: new Date(2023, 0, 4), value: 60 },
  { date: new Date(2023, 0, 5), value: 70 },
  { date: new Date(2023, 0, 6), value: 55 },
  { date: new Date(2023, 0, 7), value: 65 },
  { date: new Date(2023, 0, 8), value: 65 },
  { date: new Date(2023, 0, 9), value: 65 },
  { date: new Date(2023, 0, 10), value: 65 },
  { date: new Date(2023, 0, 11), value: 65 },
];

const Chart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  //차트 동적으로 width값 조절하기
  const containerRef = useRef<HTMLDivElement | null>(null);

  const drawChart = useCallback(() => {
    if (svgRef.current && containerRef.current) {
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

      //색상 구역 설정
      const area = d3
        .area<DataPoint>()
        .x((d) => x(d.date))
        .y0(height - margin.bottom)
        .y1((d) => y(d.value));

      //그라데이션 추가
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

      const formatTime = d3.utcFormat('%Y.%m.%d');

      // Add x-축
      svg
        .append('g')
        .call(
          d3
            .axisBottom<Date | d3.NumberValue>(x)
            .tickFormat((d) => formatTime(d as Date))
            .ticks(d3.timeDay.every(1)),
        ) // x축 텍스트
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .select('.domain')
        .attr('stroke', '#DEE2E6') // Change the color
        .attr('stroke-width', 1)
        .selectAll('.tick line')
        .style('display', 'none');

      // x축 선
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#50B15B')
        .attr('stroke-width', 2)
        .attr('d', valueline);

      // x축 채우기
      svg.append('path').datum(data).attr('fill', 'url(#line-gradient)').attr('d', area);
    }
  }, []);

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
