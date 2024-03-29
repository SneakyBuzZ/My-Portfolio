import { Chart as ChartJS, defaults, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function DoughnutComp2() {
  if (false) {
    console.log(Chart);
  }
  return (
    <>
      {" "}
      <Doughnut
        data={{
          labels: ["React.Js", "Angular.Js", "Next.Js", "Express"],
          datasets: [
            {
              label: "A",
              data: [30, 20, 10, 10],
              backgroundColor: ["#00ABFF", "#E90000", "#000", "#48A300"],
              borderColor: ["#00ABFF", "#E90000", "#000", "#48A300"],
            },
          ],
        }}
        options={{ plugins: { legend: { display: false } } }}
      />
    </>
  );
}

export default DoughnutComp2;
