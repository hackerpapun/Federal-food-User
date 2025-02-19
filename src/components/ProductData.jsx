import React from "react";
import ReactDOM from "react-dom/client";
import CategoryPage from "./components/CategoryPage/CategoryPage";

const categories = [
  {
    name: "Fruits",
    subcategories: [
      { name: "Herbs & Seasonings", link: "#" },
      { name: "Exotic Foods & Veggies", link: "#" },
      { name: "Organic Food & Vegetables", link: "#" },
      { name: "Fresh Fruits", link: "#" },
    ],
  },
  {
    name: "Beverages",
    subcategories: [
      { name: "Water", link: "#" },
      { name: "Tea", link: "#" },
      { name: "Coffee", link: "#" },
      { name: "Fruit Juices", link: "#" },
    ],
  },
  {
    name: "Snacks",
    subcategories: [
      { name: "Chips", link: "#" },
      { name: "Nuts", link: "#" },
      { name: "Cookies", link: "#" },
      { name: "Dried Fruits", link: "#" },
    ],
  },
  {
    name: "Dairy",
    subcategories: [
      { name: "Milk", link: "#" },
      { name: "Cheese", link: "#" },
      { name: "Yogurt", link: "#" },
      { name: "Butter", link: "#" },
    ],
  },
];

const products = [
  {
    id: 1,
    name: "Tata Tea Agni",
    price: 70,
    originalPrice: 80,
    discount: 10,
    image: "tata-tea.jpg",
    quantity: "100g",
    isVegetarian: true,
    options: ["Regular", "Strong"],
  },
  {
    id: 2,
    name: "Red Label Tea",
    price: 80,
    originalPrice: 90,
    discount: 11,
    image: "red-label.jpg",
    quantity: "100g",
    isVegetarian: true,
    options: ["Regular", "Strong"],
  },
  {
    id: 3,
    name: "Kasturi Tea",
    price: 100,
    originalPrice: 120,
    discount: 17,
    image: "kasturi-tea.jpg",
    quantity: "100g",
    isVegetarian: true,
    options: ["Regular", "Strong"],
  },
  {
    id: 4,
    name: "Almonds",
    price: 200,
    originalPrice: 250,
    discount: 20,
    image: "almonds.jpg",
    quantity: "200g",
    isVegetarian: true,
    options: [],
  },
  {
    id: 5,
    name: "Cashews",
    price: 250,
    originalPrice: 300,
    discount: 17,
    image: "cashews.jpg",
    quantity: "200g",
    isVegetarian: true,
    options: [],
  },
  {
    id: 6,
    name: "Milk",
    price: 50,
    originalPrice: 60,
    discount: 17,
    image: "milk.jpg",
    quantity: "1L",
    isVegetarian: true,
    options: ["Full Cream", "Low Fat"],
  },
  {
    id: 7,
    name: "Cheddar Cheese",
    price: 150,
    originalPrice: 180,
    discount: 17,
    image: "cheddar-cheese.jpg",
    quantity: "200g",
    isVegetarian: true,
    options: [],
  },
  {
    id: 8,
    name: "Greek Yogurt",
    price: 120,
    originalPrice: 140,
    discount: 14,
    image: "greek-yogurt.jpg",
    quantity: "500g",
    isVegetarian: true,
    options: [],
  },
  {
    id: 9,
    name: "Potato Chips",
    price: 30,
    originalPrice: 40,
    discount: 25,
    image: "potato-chips.jpg",
    quantity: "150g",
    isVegetarian: true,
    options: ["Salted", "Spicy"],
  },
  {
    id: 10,
    name: "Chocolate Cookies",
    price: 50,
    originalPrice: 60,
    discount: 17,
    image: "chocolate-cookies.jpg",
    quantity: "200g",
    isVegetarian: true,
    options: [],
  },
  {
    id: 11,
    name: "Dried Apricots",
    price: 150,
    originalPrice: 180,
    discount: 17,
    image: "dried-apricots.jpg",
    quantity: "200g",
    isVegetarian: true,
    options: [],
  },
  {
    id: 12,
    name: "Butter",
    price: 80,
    originalPrice: 100,
    discount: 20,
    image: "butter.jpg",
    quantity: "200g",
    isVegetarian: true,
    options: [],
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CategoryPage categories={categories} products={products} />);
