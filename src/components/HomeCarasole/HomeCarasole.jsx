import React from "react";
import ProductCarousel from "../ProductCarasole/ProductCarousel";
import rose from "../../assets/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg";
import Tulip from "../../assets/th.jpg";
import Sunflower from "../../assets/th (1).jpg";
import eggIcon from "../../assets/5f04962e5082b.jpg";
import meatIcon from "../../assets/th (1).jpg";
import fishIcon from "../../assets/th (1).jpg";
import store1 from "../../assets/discount.png";
import store2 from "../../assets/th (1).jpg";
import store3 from "../../assets/th (3).jpg";

export const HomeCarasole = () => {
  const flowerProducts = [
    {
      id: 1,
      name: "Apple",
      image: 	"https://ultimate-grocery-capacitor.initappz.com/assets/placeholder.png",
      price: "$10.00",
      originalPrice: "$15.00",
      discount: 33,
    },
    {
      id: 2,
      name: "Kashmiri Cherry",
      image: "https://ultimate-grocery-api-capacitor.initappz.com/public/storage/images/5f04076d2310b.jpg",
      price: "$12.00",
      originalPrice: "$18.00",
      discount: 33,
    },
    {
      id: 3,
      name: "Banana",
      image: Sunflower,
      price: "$8.00",
      originalPrice: "$12.00",
      discount: 33,
    },
    {
      id: 4,
      name: "Sona Mongoori Rice",
      image: rose,
      price: "$10.00",
      originalPrice: "$15.00",
      discount: 33,
    },
    {
      id: 5,
      name: "Bisleri",
      image: Tulip,
      price: "$12.00",
      originalPrice: "$18.00",
      discount: 33,
    },
    {
      id: 6,
      name: "Fresho Ginger",
      image: Sunflower,
      price: "$8.00",
      originalPrice: "$12.00",
      discount: 33,
    },
    {
      id: 7,
      name: "Aashirwad Atta",
      image: rose,
      price: "$10.00",
      originalPrice: "$15.00",
      discount: 33,
    },
    {
      id: 8,
      name: "Red Chill",
      image: Tulip,
      price: "$12.00",
      originalPrice: "$18.00",
      discount: 33,
    },
    {
      id: 3,
      name: "Cut Red Roses",
      image: Sunflower,
      price: "$8.00",
      originalPrice: "$12.00",
      discount: 33,
    },
  ];

  const categoryProducts = [
    { id: 4, name: "Eggs", icon: eggIcon },
    { id: 5, name: "Meat", icon: meatIcon },
    { id: 6, name: "Fish", icon: fishIcon },
  ];

  const bestOffers = [
    {
      id: 7,
      name: "Best Offer 1",
      image: rose,
      price: "$5.00",
      originalPrice: "$10.00",
      discount: 50,
    },
    {
      id: 8,
      name: "Best Offer 2",
      image: Tulip,
      price: "$7.00",
      originalPrice: "$14.00",
      discount: 50,
    },
  ];

  const topStores = [
    { id: 9, name: "Fresh Mart", location: "New York, USA", image: store1 },
    {
      id: 10,
      name: "Organic Hub",
      location: "Los Angeles, USA",
      image: store2,
    },
    { id: 11, name: "Green Market", location: "Chicago, USA", image: store3 },
  ];

  return (
    <div>
      <ProductCarousel
        products={flowerProducts}
        title="TOP PICKED"
        subtitle="Pick a flower on Earth and you move the farthest star."
        viewAllLink="/all-products"
        type="product"
      />
      <ProductCarousel
        products={categoryProducts}
        title="SHOP BY CATEGORIES"
        subtitle="Find everything you need in one go."
        viewAllLink="/categories"
        type="category"
      />
      <ProductCarousel
        products={bestOffers}
        title="BEST OFFERS"
        subtitle="Get the best deals on top products."
        viewAllLink="/best-offers"
        type="product"
      />
      <ProductCarousel
        products={topStores}
        title="TOP STORES"
        subtitle="Find trusted stores near you."
        viewAllLink="/top-stores"
        type="topStores"
      />
    </div>
  );
};
