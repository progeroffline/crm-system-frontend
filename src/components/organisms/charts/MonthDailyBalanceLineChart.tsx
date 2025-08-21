import { useState } from 'react';
import { faker } from '@faker-js/faker';
import ReactApexChart from 'react-apexcharts';

type User = {
  id: number;
  username: string;
  balances: number[];
};

type ChartSeries = {
  name: string;
  data: number[];
};

type ChartState = {
  options: ApexCharts.ApexOptions;
  series: ChartSeries[];
};

function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    username: faker.internet.username(),
    balances: Array.from({ length: 31 }, () => faker.number.int({ min: 0, max: 100 })),
  }));
}

const MonthDailyBalanceLineChart: React.FC<{ users: User[] }> = () => {
  const users = generateUsers(20);
  const [state] = useState<ChartState>({
    series: users.map((user) => ({
      name: user.username,
      data: user.balances,
    })),
    options: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'User Balances',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val.toFixed(0);
          },
        },
        title: {
          text: 'Balance',
        },
      },
      xaxis: {
        categories: Array.from({ length: 31 }, (_, i) => i + 1), // 1...31
        title: {
          text: 'Day',
        },
      },
      tooltip: {
        shared: true,
        y: {
          formatter: function (val: number) {
            return val.toFixed(0);
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
export default MonthDailyBalanceLineChart;
