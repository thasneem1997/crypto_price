import React from "react";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";

const Linechart = ({ chartData }) => {
  console.log(chartData);
  const [data, setData] = useState([["price", "date"]]);
  useEffect(() => {
    let dataCopy = [["date", "price"]];
    if (chartData) {
      chartData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [chartData]);

  return (
    <div className="flex justify-center mt-10 ml-80">
      <Chart chartType="Line" width="70%" height="400px" data={data} />
    </div>
  );
};

export default Linechart;
