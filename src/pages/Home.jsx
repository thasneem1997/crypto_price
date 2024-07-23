import React, { useContext } from "react";
import "./home.css";
import { Appcontext } from "../context/Appcontext";

function Home() {
  const { apicall, currency } = useContext(Appcontext);
  return (
    <>
      <div className="home-container">
        <h1>
          Largest<br></br> Crypto Market place
        </h1>
        <p>
          Lorem ipsum dolor sit possimus adipisci quas dolores <br></br>nemo
          culpa a sapiente ex sed, xime perspiciatis!
        </p>
        <div className="search">
          <input type="text" placeholder="Search Crypto..."></input>
          <button className="searchbtn">Search</button>
        </div>
      </div>
      <br />
      <br />
      <div className="table-container">
        <div className="table-grid">
          <p>#</p>
          <p>Coins</p>

          <p>Price</p>
          <p style={{textAlign:"center"}}> 24H Change</p>
          <p>Market gap</p>
        </div>
        <div>
          {apicall.slice(0, 10).map((item, index) => {
            return (
              <div key={index}>
                <div className="table-grid">
                  <p>{item.market_cap_rank}</p>

                  <div className="flex">
                    <img src={item.image} className="coinimage"></img>
                    <p style={{marginTop:"11px"}}>{item.name + "-" + item.symbol}</p>
                  </div>
                  <p>
                    {currency.symbol}
                    {item.current_price}
                  </p>
                  <p style={{textAlign:"center",color:"red"}}>
                    {Math.floor(item.market_cap_change_percentage_24h * 100) /
                      100}
                  </p>
                  <p>
                    {currency.symbol}
                    {item.market_cap}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
