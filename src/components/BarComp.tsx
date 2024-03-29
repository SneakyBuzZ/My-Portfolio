import { Chart as ChartJS, defaults, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function BarComp() {
  if (false) {
    console.log(Chart);
  }
  return (
    <>
      {" "}
      <Bar
        data={{
          labels: ["Jan", "Feb", "Mar"],
          datasets: [
            {
              label: "Contributions",
              data: [36, 44, 33],
              backgroundColor: ["#00408C"],
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

export default BarComp;
