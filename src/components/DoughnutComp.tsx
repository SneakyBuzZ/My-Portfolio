import { Chart as ChartJS, defaults, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function DoughnutComp() {
  if (false) {
    console.log(Chart);
  }
  return (
    <>
      {" "}
      <Doughnut
        data={{
          labels: ["Typescript", "Javascript", "Python", "Java"],
          datasets: [
            {
              label: "A",
              data: [10, 30, 20, 20],
              backgroundColor: ["#00ABFF", "#FFF936", "#0053A6", "#E90000"],
              borderColor: ["#00ABFF", "#FFF936", "#0053A6", "#E90000"],
            },
          ],
        }}
        options={{ plugins: { legend: { display: false } } }}
      />
    </>
  );
}

export default DoughnutComp;
