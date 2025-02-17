import React from "react";
import CategorySection from "../CategoriesSection/CategoriesSection";
import fruitsIcon from "../../assets/5f04962e5082b.jpg";

export const HomeProducts = () => {
  const categoriesData = [
    {
      title: "Fruits",
      categories: [
        { name: "Fruits", image: fruitsIcon },
        { name: "Herbs & Seasonings", image: fruitsIcon },
        { name: "Cherry", image: fruitsIcon },
        { name: "Exotic Foods & Veggies", image: fruitsIcon },
        { name: "Organic Food & Vegetables", image: fruitsIcon },
        { name: "Cuts & Sprouts", image: fruitsIcon },
        { name: "Flower Bouquets, Bunches", image: fruitsIcon },
        { name: "Fresh Fruits", image: fruitsIcon },
      ],
    },
    {
      title: "Beverages",
      categories: [
        { name: "Water", image: fruitsIcon },
        { name: "Tea", image: fruitsIcon },
        { name: "Coffee", image: fruitsIcon },
        { name: "Health Drink, Supplements", image: fruitsIcon },
        { name: "Fruit Juices & Drinks", image: fruitsIcon },
      ],
    },
    {
      title: "Foodgrains, Oils & Masalas",
      categories: [
        { name: "Atta, Flour & Sooji", image: fruitsIcon },
        { name: "Dals & Pulses", image: fruitsIcon },
        { name: "Rice & Rice Products", image: fruitsIcon },
        { name: "Organic Staples", image: fruitsIcon },
        { name: "Salt, Sugar & Jaggery", image: fruitsIcon },
        { name: "Edible Oils & Ghee", image: fruitsIcon },
        { name: "Masalas & Spices", image: fruitsIcon },
        { name: "Dry Fruits", image: fruitsIcon },
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
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2
            style={{
              backgroundColor: "#F3F3F3",
              padding: "15px",
              textAlign: "center",
              width: "100%",
              fontSize: "34px",
              fontWeight: "500",
            }}
          >
            {section.title}
          </h2>
          <CategorySection categories={section.categories} />
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
