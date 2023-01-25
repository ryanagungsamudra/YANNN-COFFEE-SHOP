import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "Best Staff of the Monthl",
      data: [12, 3],
      backgroundColor: ["rgba(74, 142, 7, 1)", "rgba(115, 136, 169, 0.35)"],
    },
  ],
};

function Staffchart() {
  return <Doughnut data={data} />;
}

export default Staffchart;
