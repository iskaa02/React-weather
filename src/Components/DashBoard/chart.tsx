import React from "react";
import { Doughnut } from "react-chartjs-2";
type props = {
  size: number;
  UV: number;
};
const Chart = (props: props) => {
  const data1 = {
    labels: ["Low", "Moderate", "High", "Very high"],
    datasets: [
      {
        data: [props.UV, 10 - props.UV],
        backgroundColor: ["#ffbf5e", "#c7c7c7"],
        borderColor: ["#fff"],
        cutout: ["60%"],
      },
    ],
  };

  return (
    <div
      style={{
        width: props.size,
      }}
    >
      <Doughnut
        data={data1}
        type={"doughnut"}
        width={150}
        style={{ width: 150, height: 150 }}
        options={{
          rotation: -90,
          circumference: 180,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        }}
      />
    </div>
  );
};
export default Chart;
