import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShopByCategories.css";

const categories = [
  {
    name: "Beauty & Hygiene",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/046-wine.png",
    path: "beauty-hygiene",
  },
  {
    name: "Cleaning & Household",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/035-flour.png",
    path: "cleaning-household",
  },
  {
    name: "Kitchen, Garden & Pets",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/037-chips.png",
    path: "kitchen-garden-pets",
  },
  {
    name: "Eggs, Meat & Fish",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/1535199.svg",
    path: "eggs-meat-fish",
  },
  {
    name: "Gourmet & Worldfood",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/013-vegetable.png",
    path: "gourmet-worldfood",
  },
  {
    name: "Baby Care",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/009-meat.png",
    path: "baby-care",
  },
  {
    name: "Baby Food",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/019-baby-food1.png",
    path: "baby-food",
  },
  {
    name: "Beauty & Hygiene",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/046-wine.png",
    path: "beauty-hygiene",
  },
  {
    name: "Cleaning & Household",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/035-flour.png",
    path: "cleaning-household",
  },
  {
    name: "Kitchen, Garden & Pets",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/037-chips.png",
    path: "kitchen-garden-pets",
  },
  {
    name: "Eggs, Meat & Fish",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/1535199.svg",
    path: "eggs-meat-fish",
  },
  {
    name: "Gourmet & Worldfood",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/013-vegetable.png",
    path: "gourmet-worldfood",
  },
  {
    name: "Baby Care",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/009-meat.png",
    path: "baby-care",
  },
  {
    name: "Baby Food",
    img: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/019-baby-food1.png",
    path: "baby-food",
  },
];

const settings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 748,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ShopByCategories = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        width: "100%",
        // padding: "2rem 0",
      }}
    >
      <h2 className="heading">SHOP BY CATEGORIES</h2>
      <p className="letter">Find everything you need in one go.</p>
      <div style={{ width: "70%", marginTop: "1.5rem" }}>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} style={{ padding: "1rem" }}>
              <div
                className="category-card"
                onClick={() =>
                  navigate(
                    `/category?category=${encodeURIComponent(category.path)}`
                  )
                } 
                style={{ cursor: "pointer" }}
              >
                <img
                  className="img"
                  src={category.img}
                  alt={category.name}
                  style={{ width: "50px", height: "50px" }}
                />
                <p className="category-name">{category.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ShopByCategories;
