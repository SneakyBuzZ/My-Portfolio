import { Chart as ChartJS, defaults, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

import weeklyData from "../data/weeklyData.json";

function LineComp() {
  if (false) {
    console.log(Chart);
  }
  return (
    <>
      {" "}
      <Line
        data={{
          labels: weeklyData.map((data) => data.label),
          datasets: [
            {
              label: "Hours",
              data: weeklyData.map((data) => data.hours),
              backgroundColor: "#33B6FF",
              borderColor: "#33B6FF",
            },
            {
              label: "Contribution",
              data: weeklyData.map((data) => data.contributions),
              backgroundColor: "#CD9D00",
              borderColor: "#CD9D00",
            },
          ],
        }}
        options={{
          elements: { line: { tension: 0.5 } },
          plugins: { legend: { display: false } },
        }}
      />
    </>
  );
}

export default LineComp;
