import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { items, removeFromCart } = useContext(CartContext);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  
  return (
    <div className="cart-page">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>My Cart</h1>
      <div className="cart">
        <div className="cart-header">
          {items.map((i) => (
            <div key={i.id}>
              <div className="cart-item">
                <img src={i.img} alt={i.title} className="cart-img" />
                <div className="cart-body">
                  <h4>{i.title}</h4>
                  <h5>({i.size})</h5>
                  <span
                    style={{
                      color: "#05A84B",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                    }}
                  >
                    ${i.price.toFixed(2)}
                  </span>
                </div>
                <div className="cart-icons">
                  <div className="icon-plusminus">
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <span
                      style={{
                        color: "#05A84B",
                        fontSize: "20px",
                      }}
                    >
                      {i.qty}
                    </span>
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="icon-trash">
                    <button
                      onClick={() => removeFromCart(i.id)}
                      className="btn-trash"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-empty">
            <h4>{items && items.length ? "" : "Cart is empty"}</h4>
          </div>
        </div>
        <div className="cart-footer">
          <h3>
            Total =
            <span
              style={{
                color: "#05A84B",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              ${totalPrice.toFixed(2)}
            </span>
          </h3>
          <NavLink to="/login">
            <button className="btn-sign-in">Checkout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
