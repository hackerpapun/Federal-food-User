import React from "react";
import CategorySection from "../CategoriesSection/CategoriesSection";
import fruitsIcon from "../../assets/5f04962e5082b.jpg";
import herbs from "../../assets/cherry1.png";
import cherry from"../../assets/cherry1.png";
import food from "../../assets/11.jpeg";
import organicfood from"../../assets/2.jpeg";
import cuts from "../../assets/4.jpeg";
import freshfruits from "../../assets/fruit6.png";
import water from"../../assets/beverages1.png";
import Tea from"../../assets/Tea.png";
import coffee from "../../assets/nutella.jpeg"
import Drink from"../../assets/11.jpeg";
import juices from"../../assets/beverages1.png";
import Atta from"../../assets/grain.png";
import pulses from"../../assets/grain.png";
import rice from "../../assets/5.jpeg"


export const HomeProducts = () => {
  const categoriesData = [
    {
      title: "Fruits",
      categories: [
        { name: "Fruits", image: herbs },
        { name: "Herbs & Seasonings", image: cherry },
        { name: "Cherry", image: food },
        { name: "Exotic Foods & Veggies", image: organicfood },
        { name: "Organic Food & Vegetables", image: cuts },
        { name: "Cuts & Sprouts", image: freshfruits },
        { name: "Flower Bouquets, Bunches", image: freshfruits },
        
      ],
    },
    {
      title: "Beverages",
      categories: [
        { name: "Water", image: water },
        { name: "Tea", image: Tea },
        { name: "Coffee", image: coffee },
        { name: "Health Drink, Supplements", image: Drink },
        { name: "Fruit Juices & Drinks", image:juices },
      ],
    },
    {
      title: "Foodgrains, Oils & Masalas",
      categories: [
        { name: "Atta, Flour & Sooji", image: Atta },
        { name: "Dals & Pulses", image:pulses  },
        { name: "Rice & Rice Products", image: rice },
        { name: "Organic Staples", image:water },
        { name: "Salt, Sugar & Jaggery", image: water },
        { name: "Edible Oils & Ghee", image: water },
        { name: "Masalas & Spices", image:water  },
        { name: "Dry Fruits", image: water },
      ],
    },
    {
      title: "Bakery, Cakes & Dairy",
      categories: [
        { name: "Bakery Snacks", image: fruitsIcon },
        { name: "Breads & Buns", image: fruitsIcon },
        { name: "Cakes & Pastries", image: fruitsIcon },
        { name: "Cookies, Rusk & Khari", image: fruitsIcon },
        { name: "Dairy", image: fruitsIcon },
        { name: "Gourmet Breads", image: fruitsIcon },
        { name: "Ice Creams & Desserts", image: fruitsIcon },
      ],
    },
    {
      title: "Snacks & Branded Foods",
      categories: [
        { name: "Breakfast Cereals", image: fruitsIcon },
        { name: "Biscuits & Cookies", image: fruitsIcon },
        { name: "Frozen Veggies & Snacks", image: fruitsIcon },
        { name: "Spreads, Sauces, Ketchup", image: fruitsIcon },
        { name: "Snacks & Namkeens", image: fruitsIcon },
        { name: "Ready to Cook & Eat", image: fruitsIcon },
        { name: "Chocolate & Candies", image: fruitsIcon },
        { name: "Pickles & Chutney", image: fruitsIcon },
        { name: "Indian Mithai", image: fruitsIcon },
      ],
    },
    {
      title: "Beauty & Hygiene",
      categories: [
        { name: "Oral Care", image: fruitsIcon },
        { name: "Bath & Hand Wash", image: fruitsIcon },
        { name: "Health & Medicine", image: fruitsIcon },
        { name: "Hair Care", image: fruitsIcon },
        { name: "Men's Grooming", image: fruitsIcon },
        { name: "Skin Care", image: fruitsIcon },
        { name: "Fragrances & Deos", image: fruitsIcon },
        { name: "Makeup", image: fruitsIcon },
      ],
    },
    {
      title: "Cleaning & Household",
      categories: [
        { name: "All Purpose Cleaners", image: fruitsIcon },
        { name: "Disposable & Garbage Bags", image: fruitsIcon },
        { name: "Fresheners & Repellents", image: fruitsIcon },
        { name: "Bins & Bathroom Ware", image: fruitsIcon },
        { name: "Car & Shoe Care", image: fruitsIcon },
        { name: "Detergents & Dishwash", image: fruitsIcon },
        { name: "Mops, Brushes & Scrubs", image: fruitsIcon },
      ],
    },
    {
      title: "Eggs, Meat & Fish",
      categories: [
        { name: "Eggs", image: fruitsIcon },
        { name: "Fish & Seafood", image: fruitsIcon },
        { name: "Mutton & Lamb", image: fruitsIcon },
        { name: "Poultry", image: fruitsIcon },
        { name: "Sausages, Bacon & Salami", image: fruitsIcon },
      ],
    },
    {
      title: "Gourmet & World Food",
      categories: [
        { name: "Cereals & Breakfast", image: fruitsIcon },
        { name: "Chocolates & Biscuits", image: fruitsIcon },
        { name: "Cooking & Baking Needs", image: fruitsIcon },
        { name: "Dairy & Cheese", image: fruitsIcon },
        { name: "Drinks & Beverages", image: fruitsIcon },
        { name: "Oils & Vinegar", image: fruitsIcon },
        { name: "Pasta, Soup & Noodles", image: fruitsIcon },
        { name: "Sauces, Spreads & Dips", image: fruitsIcon },
        { name: "Snacks, Dry Fruits, Nuts", image: fruitsIcon },
        { name: "Tinned & Processed Food", image: fruitsIcon },
      ],
    },
    {
      title: "Baby Care",
      categories: [
        { name: "Baby Accessories", image: fruitsIcon },
        { name: "Baby Bath & Hygiene", image: fruitsIcon },
        { name: "Baby Food & Formula", image: fruitsIcon },
        { name: "Diapers & Wipes", image: fruitsIcon },
        { name: "Feeding & Nursing", image: fruitsIcon },
        { name: "Mothers & Maternity", image: fruitsIcon },
      ],
    },
  ];

  return (
    <div>
      {categoriesData.map((section, index) => (
        <CategorySection
          key={index}
          title={section.title}
          categories={section.categories}
        />
      ))}
    </div>
  );
};

export default HomeProducts;
