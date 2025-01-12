import React, { useContext, useState } from "react";
import "./home.css";
import { Appcontext } from "../context/Appcontext";
import { Link } from "react-router-dom";

function Home() {
  const { apicall, currency } = useContext(Appcontext);

  const [searchinput, setsearchinput] = useState("");
  const [input, setinput] = useState(false);

  const handleChange = (e) => {
    setsearchinput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setinput(true);
  };

  return (
    <>
    
      <div className="home-container">
        <h1>
          Largest
          <br /> Crypto Market place
        </h1>
        <p>
          Lorem ipsum dolor sit possimus adipisci quas dolores <br /> nemo culpa
          a sapiente ex sed, xime perspiciatis!
        </p>
        <div className="search">
          <form onSubmit={handleClick}>
            <Link to={"/"}>
              <input
                type="text"
                list="coinlist"
                placeholder="Search Crypto..."
                value={searchinput}
                onChange={handleChange}
              />
            </Link>

            <datalist id="coinlist">
              {apicall.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name} - {item.symbol.toUpperCase()}
                </option>
              ))}
            </datalist>
            <button className="searchbtn">Search</button>
          </form>
        </div>
      </div>
      <br />
      <br />
      <div className="table-container">
        <div className="table-grid">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p>Market Cap</p>
        </div>
        <div>
          {input
            ? apicall
                .filter((item) =>
                  item.name.toLowerCase().includes(searchinput.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="table-grid">
                        <p>{item.market_cap_rank}</p>
                        <div className="flex">
                          <img
                            src={item.image}
                            className="coinimage"
                            alt={item.name}
                          />
                          <p style={{ marginTop: "11px" }}>
                            {item.name} - {item.symbol.toUpperCase()}
                          </p>
                        </div>
                        <p>
                          {currency.symbol}
                          {item.current_price}
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            color:
                              item.market_cap_change_percentage_24h < 0
                                ? "red"
                                : "green",
                          }}
                        >
                          {Math.floor(
                            item.market_cap_change_percentage_24h * 100
                          ) / 100}
                          %
                        </p>
                        <p>
                          {currency.symbol}
                          {item.market_cap}
                        </p>
                      </div>
                    </div>
                  );
                })
            : apicall.slice(0, 8).map((item, index) => {
                return (
                  <div key={index}>
                    <Link to={`Details/${item.id}`} className="table-grid">
                      <p>{item.market_cap_rank}</p>
                      <div className="flex">
                        <img
                          src={item.image}
                          className="coinimage"
                          alt={item.name}
                        />
                        <p style={{ marginTop: "11px" }}>
                          {item.name} - {item.symbol.toUpperCase()}
                        </p>
                      </div>
                      <p>
                        {currency.symbol}
                        {item.current_price}
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          color:
                            item.market_cap_change_percentage_24h < 0
                              ? "red"
                              : "green",
                        }}
                      >
                        {Math.floor(
                          item.market_cap_change_percentage_24h * 100
                        ) / 100}
                        %
                      </p>
                      <p>
                        {currency.symbol}
                        {item.market_cap}
                      </p>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Home;
