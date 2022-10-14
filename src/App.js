import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import menuData from "./Data/menuData";
import { useState } from "react";
import Footer from "./components/Footer";
import { CartProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterSize = (size) => {
    if (size === "All") {
      setMenuItems(menuData);
      return;
    }
    const newSize = menuData.filter((item) => item.size === size);
    setMenuItems(newSize);
  };

  return (
    <div className="pizza-app">
      <div className="container">
        <ToastContainer />
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={<Menu menuData={menuItems} filterSize={filterSize} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </CartProvider>
      </div>
      <Footer />
    </div>
  );
}
