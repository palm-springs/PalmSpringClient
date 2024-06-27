// pages/index.tsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  date: Date;
  value: number;
}

const data: DataPoint[] = [
  { date: new Date(2023, 0, 1), value: 30 },
  { date: new Date(2023, 1, 1), value: 50 },
  { date: new Date(2023, 2, 1), value: 45 },
  { date: new Date(2023, 3, 1), value: 60 },
  { date: new Date(2023, 4, 1), value: 70 },
  { date: new Date(2023, 5, 1), value: 90 },
];

const Chart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      const width = 800;
      const height = 400;
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

      const line = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      svg.append('g').call(d3.axisLeft(y)).attr('transform', `translate(${margin.left},0)`);

      svg
        .append('g')
        .call(d3.axisBottom(x))
        .attr('transform', `translate(0,${height - margin.bottom})`);

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);
    }
  }, []);

  return <svg ref={svgRef} width={800} height={400}></svg>;
};

export default Chart;
