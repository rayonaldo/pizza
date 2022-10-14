import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-above container">
        <div className="popular-pizza">
          <strong>Popular Pizza</strong>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="services">
          <strong>Services</strong>
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="customer-information">
          <strong>Customer Information</strong>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="contact-us">
          <strong>Contact Us</strong>
          <ul>
            <li>Address: 8901 Pizza Road,Flatlands</li>
            <li>Telephone: +254 726547972</li>
            <li>E-mail: mail@pizzaro.org</li>
          </ul>
        </div>
      </div>
      <div className="footer-below">
        <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>
          <p>Copyright &copy; 2015. Pizza Time </p>
        </div>
        <div className="social">
          <i class="fa-brands fa-facebook fa-2x"></i>
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i class="fa-brands fa-youtube fa-2x"></i>
        </div>
      </div>
    </footer>
  );
}
