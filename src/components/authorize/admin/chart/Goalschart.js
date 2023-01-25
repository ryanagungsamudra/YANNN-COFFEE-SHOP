import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "Goals",
      data: [12, 3],
      backgroundColor: ["rgba(106, 64, 41, 1)", "rgb(255, 186, 51)"],
    },
  ],
};

function Goalschart() {
  return <Doughnut data={data} />;
}

export default Goalschart;
