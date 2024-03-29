import { Chart as ChartJS, defaults, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BarComp2() {
  if (false) {
    console.log(Chart);
  }
  return (
    <>
      {" "}
      <Bar
        data={{
          labels: ["Fb", "Aw", "MDb"],
          datasets: [
            {
              label: "Experience %",
              data: [36, 44, 13],
              backgroundColor: ["#FFB803", "#FF2B84", "#027B0E"],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          plugins: { legend: { display: false } },
        }}
      />
    </>
  );
}

export default BarComp2;
