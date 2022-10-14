import React from "react";
import cardData from "../Data/cardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

export default function Card() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="recommended">
      <h1 style={{ textAlign: "center", margin: "50px 0" }}>
        Recommended menu
      </h1>
      <div className="cards">
        <Swiper
          spaceBetween={0}
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          breakpoints={{
            650: {
              width: 650,
              slidesPerView: 2,
            },
            1150: {
              width: 1150,
              slidesPerView: 3,
            },
          }}
        >
          {cardData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img" alt={item.title}></img>
                <div className="card-body">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <span
                    style={{
                      color: "#05A84B",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <div className="card-footer">
                  <select className="pizza-size">
                    <option value="regular">Regular</option>
                  </select>
                  <button
                    onClick={() =>
                      addToCart(
                        item.id,
                        item.img,
                        item.title,
                        item.size,
                        item.price
                      )
                    }
                    className="btn-add-cart"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
