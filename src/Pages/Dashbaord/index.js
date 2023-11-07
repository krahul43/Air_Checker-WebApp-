import { Card, Space, Statistic, Select,Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAllData} from "../../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie,Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const { Option } = Select;

function Dashboard() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [stationNames, setStationNames] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch all data and station names from the API
    getAllData().then((data) => {
      setStationNames(data.map((item) => item.station));
      setData(data);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Space direction="horizontal">
        <Typography.Title level={4}>Select a Station:</Typography.Title>
        <Select
          style={{ width: 200 }}
          placeholder="Select a station"
          onChange={setSelectedStation}
          value={selectedStation}
        >
          <Option value={null}>All Stations</Option>
          {stationNames.map((name) => (
            <Option key={name} value={name}>
              {name}
            </Option>
          ))}
        </Select>
      </Space>
      <Space>
        <DashboardChart selectedStation={selectedStation} data={data} />
      </Space>
    </Space>
  );
}


  function DashboardChart({ selectedStation, data }) {
    const filteredData = selectedStation
      ? data.filter((item) => item.station === selectedStation)
      : data;
  
    const labels = filteredData.map((item) => `Area-${item.station}`);
    const values = filteredData.map((item) => item.value);
  
    const revenueData = {
      labels,
      datasets: [
        {
          label: "Air Quality",
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Air Quality",
      },
    },
  };

  return (
    <Card style={{ width: 1250, height: 620 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}
export default Dashboard;