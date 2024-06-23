import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const ChartHomeAd = () => {
  const [series, setSeries] = useState([{ data: [] }]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26A69A', '#D10CE8'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: [],
          fontSize: '12px'
        }
      }
    }
  });

  useEffect(() => {
    axios.get('https://webbansach-production.up.railway.app/book-orders/get_all')
      .then(response => {
        console.log('API response:', response.data); // Debug log
        const orders = response.data;
        const dateMap = {};

        orders.forEach(order => {
          const date = new Date(order.createdAt).toLocaleDateString('en-GB');
          if (!dateMap[date]) {
            dateMap[date] = 0;
          }
          dateMap[date] += order.quantity;
        });

        const categories = Object.keys(dateMap);
        const data = Object.values(dateMap);

        console.log('Categories:', categories); // Debug log
        console.log('Data:', data); // Debug log

        setSeries([{ data }]);
        setOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
            ...prevOptions.xaxis,
            categories,
            labels: {
              ...prevOptions.xaxis.labels,
              style: {
                ...prevOptions.xaxis.labels.style,
                colors: new Array(categories.length).fill().map((_, i) => options.colors[i % options.colors.length])
              }
            }
          }
        }));
      })
      .catch(error => {
        console.error('Error fetching book orders:', error);
      });
  }, []);

  return (
    <div>
      <h2>Thống kê số lượng sách bán theo ngày</h2>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
}

export default ChartHomeAd;
