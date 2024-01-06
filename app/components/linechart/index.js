import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const getMaxValue = (array) => {
  return Math.max(...array.map((error) => error.count));
};

function LineChart() {
  const [maxValue, setMaxValue] = React.useState(0);
  React.useEffect(() => {
    if (dataList[0]) {
      console.log(dataList);
      setMaxValue(getMaxValue(dataList));
    }
  }, []);
  return (
    <div className="w-full h-[60vw] flex justify-center items-center md:max-h-[60vh]">
      <ResponsiveContainer width="95%" height="90%">
        <LineChart
          data={dataList}
          margin={{
            top: 5,
            right: 30,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 10]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          >
            {dataList.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
