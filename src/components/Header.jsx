import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Context/CartContext";
import CartSvg from "./CartSvg";

export default function Header() {
  const { items } = useContext(CartContext);

  return (
    <header>
      <div className="header">
        <NavLink to="/">
          <div className="brand">
            <i
              className="fa-solid fa-pizza-slice"
              style={{
                color: "#EC0000",
                fontSize: "35px",
                transform: "rotate(-75deg)",
              }}
            ></i>
            <h1>Pizza Time</h1>
          </div>
        </NavLink>
        <nav className="nav-link">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <button className="btn-cart">
                  <CartSvg />
                  <b className="badge-cart">{items.length}</b>
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button className="btn-sign-in">LOGIN</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
