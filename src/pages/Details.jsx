import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import Linechart from "../components/Linechart";

function Details() {
  let { id } = useParams();
  const { currency } = useContext(Appcontext);
  const [data, setData] = useState();
  const [chartData, setChartData] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-29rJX8qX5EhR54iNL55cYR3T",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  };
  const fetchChartData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-29rJX8qX5EhR54iNL55cYR3T",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setChartData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchChartData();
  }, [currency]);

  return (
    <div>
      {data && data.image && chartData ? (
        <>
          <img
            src={data.image.large}
            className="mr-auto ml-auto w-20 mt-20"
          ></img>
          <h1 className="text-3xl font-bold text-center text-white mt-8">
            {id}
            <span>({data.name})</span>
          </h1>
          <Linechart chartData={chartData} />
        </>
      ) : (
        <h1 className="text-center text-white align-middle">loading...</h1>
      )}
    </div>
  );
}

export default Details;
