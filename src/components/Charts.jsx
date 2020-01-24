import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <div className = "coin-information">
            <p>All time high: <span className="coin-data">{Math.round(coin.ath)}</span></p>
            <p>Market Cap: <span className="coin-data">{coin.market_cap}</span></p>
            <p>Current Price: <span className="coin-data">{Math.round(coin.current_price)}</span></p>
            <p>24 hour price change: <span className="coin-data">{Math.round(coin.price_change_24h)}</span></p>
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;
