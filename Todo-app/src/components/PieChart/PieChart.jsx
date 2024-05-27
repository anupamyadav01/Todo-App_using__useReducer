import { Bar, BarChart } from "recharts";

const PieChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: 1890,
    },
  ];
  return (
    <div>
      <h1>Pie Chart</h1>
      <BarChart width={200} height={350} data={data}>
        <Bar dataKey="uv" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default PieChart;
