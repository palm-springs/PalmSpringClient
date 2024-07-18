'use client';

import { ArticlePeriodProps, BlogPeriodProps } from '@/types/dashboard';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { format } from 'path';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartDetailProps {
  statisticValue: string;
  articleChartData?: ArticlePeriodProps;
  blogData?: BlogPeriodProps;
}

const Chart = (props: ChartDetailProps) => {
  const { statisticValue, articleChartData, blogData } = props;

  const [chartData, setChartData] = useState<number[]>([]);
  const [date, setDate] = useState<string[]>([]);
  const [rate, setRate] = useState<number[]>([]);


  useEffect(() => {
    if (statisticValue === 'visitant' && blogData) {
      const data = blogData.rows.map((row) => row.views);
      const date = blogData.rows.map((row) => row.date);
      const rate = blogData.rows.map((row) => parseFloat(row.rate.toFixed(1)));
      setChartData(data);
      setDate(date);
      setRate(rate);
    } else if (articleChartData) {
      const data = articleChartData.period.rows.map((row) => row.views);
      const date = articleChartData.period.rows.map((row) => row.date);
      const rate = articleChartData.period.rows.map((row) => parseFloat(row.rate.toFixed(1)));

      setChartData(data);
      setDate(date);
      setRate(rate);
    }
  }, [statisticValue, articleChartData, blogData]);

  return (
    <ApexChart
      type="area"
      width="100%"
      height="100%"
      series={[
        {
          name: '일별 방문 수',
          data: chartData,
        },
      ]}
      options={{
        chart: {
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            dynamicAnimation: {
              enabled: true,
              speed: 350,
            },
          },
          height: 350,
          type: 'area',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
          colors: [' #50B15B'],
        },
        xaxis: {
          type: 'datetime',
          categories: date,
          labels: {
            format: 'MM/dd',
          },
          tooltip: {
            enabled: false, // 툴팁 꼬리말을 비활성화
          },
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const tooltipDate = date[dataPointIndex];
            const rateValue = rate[dataPointIndex];
            const rateIcon =
              rateValue > 0
                ? '<img src="https://github.com/user-attachments/assets/78d742cf-088a-47ae-aa93-f6252fc093c5" style="margin-bottom: 2px;" />'
                : rateValue < 0
                  ? '<img src="https://github.com/user-attachments/assets/ccaf56b3-fd13-4aa9-bea6-ef5437c24709" style="margin-bottom: 2px;" />'
                  : '';
            return `<div style="width: 120px; text-align: center;  background: #e3e3e3; border: 1px solid #ececec; border-radius: 5px; font-family: 'Pretendard';">
                        <div style="padding: 8px; font-weight: bold;">
                            <div style="font-size: 10px; padding-bottom: 4px; ">${dayjs(tooltipDate).format('MM월 DD일')}</div>
                        </div>
                        <div style="background: #ffffff; padding-top: 4px;">
                            <div style="font-size: 12px; color: #2e2e2e; margin-bottom: 4px; margin-top: 10px;">${w.globals.seriesNames[seriesIndex]}: ${series[seriesIndex][dataPointIndex]}</div><br />
                            <div style="font-size: 12px; color: #2e2e2e;">전일 대비: ${rateIcon} ${rateValue}%</div><br />
                      </div>
                    </div>`;
          },
        },
        colors: ['#50B15B', ' #50b15b61'],
      }}
    />
  );
};

export default Chart;
