import ApexChart from 'react-apexcharts';
import styled from 'styled-components';

const Chart = () => {
  return (
    <ApexChart
      type="area"
      width="100%"
      height="100%"
      series={[
        {
          name: '일별 방문 수',
          data: [8050, 8118, 7639, 7950, 7703, 7923, 8229, 8025, 8236, 8536, 9005, 8853, 9257, 9102, 9536],
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
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2024-07-01T00:00:00.000Z',
            '2024-07-02T00:30:00.000Z',
            '2024-07-03T00:30:00.000Z',
            '2024-07-04T00:30:00.000Z',
            '2024-07-05T00:30:00.000Z',
            '2024-07-06T00:30:00.000Z',
            '2024-07-07T00:30:00.000Z',
            '2024-07-08T00:30:00.000Z',
            '2024-07-09T00:30:00.000Z',
            '2024-07-10T00:30:00.000Z',
            '2024-07-11T00:30:00.000Z',
            '2024-07-12T00:30:00.000Z',
            '2024-07-13T00:30:00.000Z',
            '2024-07-14T00:30:00.000Z',
            '2024-07-15T00:30:00.000Z',
          ],
          labels: {
            format: 'MM/dd',
          },
        },
        tooltip: {
          x: {
            format: 'MM/dd',
          },
        },
      }}
    />
  );
};

export default Chart;
