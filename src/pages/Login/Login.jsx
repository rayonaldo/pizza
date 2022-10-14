import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>Member Login</h1>
      <form className="form-login">
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" placeholder="E-mail" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="*******" />
        <button className="btn-add-cart">Login</button>
        <span>Not a member?</span>
        <button className="btn-add-cart">Register</button>
      </form>
    </div>
  );
}

