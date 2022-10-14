import React from "react";
import Card from "../../components/Card";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="header-background">
        <div className="header-text">
          <h1 style={{ fontSize: "72px" }}>Friday Pizza!</h1>
          <h2 style={{ fontSize: "36px" }}>
            Time to enjoy our delicious pizza.
          </h2>
          <button className="btn-order-now">ORDER NOW</button>
        </div>
        <div className="header-img"></div>
      </div>
      <Card />
    </div>
  );
}

