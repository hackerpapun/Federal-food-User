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
import staple from "../../assets/9.jpeg";
import salt from "../../assets/10.jpeg";
import oil from "../../assets/oil.jpeg";
import spices from"../../assets/41.jpeg";
import DryFruits from"../../assets/10.jpeg";
import snacks from "../../assets/31.jpeg";
import BakerySnacks from "../../assets/clean1.png";
import Breads from "../../assets/bread.png";
import cakes from "../../assets/dairy.png";
import cookies from "../../assets/non-veg.png";
import Dairy from "../../assets/veg1.png";
import GourmetBreads from "../../assets/fruit6.png";
import Breakfast from"../../assets/meat1.png";
import Biscuit from"../../assets/veg1.png";
import FrozenVeggies from"../../assets/clean1.png";
import spreads from "../../assets/9.jpeg";
import Namkeens from "../../assets/10.jpeg";
import cook from"../../assets/10.jpeg";
import chocolate from"../../assets/bread.png";
import pickles from"../../assets/fruit6.png";
import Mithai from"../../assets/non-veg.png";
import OralCare from "../../assets/clean1.png";
import Bath from "../../assets/Tea.png";
import Medicine from"../../assets/grain.png";
import HairCare from "../../assets/clean1.png";
import Grooming from"../../assets/beverages1.png";
import SkinCare from"../../assets/fruit6.png";
import Fragrance from"../../assets/5.jpeg";
import Makeup from "../../assets/10.jpeg";
import Cleaners from "../../assets/2.jpeg";
import GarbageBags from"../../assets/81.jpeg";
import Repellents from"../../assets/Tea.png";
import Bins from"../../assets/clean1.png";
import car from"../../assets/fruit6.png";
import Dishwash from "../../assets/dairy.png";
import Mops from"../../assets/clean1.png";
import eggs from"../../assets/meat1.png";
import fish from "../../assets/non-veg.png";
import mutton from"../../assets/foods.png";
import poultry from "../../assets/bread.png";
import Bacon from "../../assets/veg1.png";
import sweets from"../../assets/non-veg.png";
import Biscuit from"../../assets/non-veg.png";
import cheese from "../../assets/bread.png"
import Drinks from"../../assets/Tea.png";
import Oils from "../../assets/oil.jpeg";
import Pasta from "../../assets/10.jpeg";
import Dips from "../../assets/10.jpeg";
import Nuts from "../../assets/nutella.jpeg";
import Food from "../../assets/offer.png";
import Accessories from "../../assets/81.jpeg";
import Hygiene from "../../assets/11.jpeg";
import Formula from"../../assets/9.jpeg";
import Wipes from"../../assets/31.jpeg";
import Nursing from "../../assets/10.jpeg";
import Maternity from"../../assets/10.jpeg";






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
        { name: "Organic Staples", image: staple },
        { name: "Salt, Sugar & Jaggery", image: salt },
        { name: "Edible Oils & Ghee", image: oil },
        { name: "Masalas & Spices", image:spices  },
        { name: "Dry Fruits", image: DryFruits },
      ],
    },
    {
      title: "Bakery, Cakes & Dairy",
      categories: [
        { name: "Bakery Snacks", image: snacks },
        { name: "Breads & Buns", image: BakerySnacks },
        { name: "Cakes & Pastries", image: Breads },
        { name: "Cookies, Rusk & Khari", image: cakes },
        { name: "Dairy", image: cookies },
        { name: "Gourmet Breads", image: Dairy },
        { name: "Ice Creams & Desserts", image: GourmetBreads },
      ],
    },
    {
      title: "Snacks & Branded Foods",
      categories: [
        { name: "Breakfast Cereals", image: Breakfast },
        { name: "Biscuits & Cookies", image: Biscuits },
        { name: "Frozen Veggies & Snacks", image: FrozenVeggies },
        { name: "Spreads, Sauces, Ketchup", image: spreads },
        { name: "Snacks & Namkeens", image:Namkeens },
        { name: "Ready to Cook & Eat", image: cook },
        { name: "Chocolate & Candies", image: chocolate },
        { name: "Pickles & Chutney", image: pickles },
        { name: "Indian Mithai", image: Mithai },
      ],
    },
    {
      title: "Beauty & Hygiene",
      categories: [
        { name: "Oral Care", image: OralCare },
        { name: "Bath & Hand Wash", image: Bath },
        { name: "Health & Medicine", image: Medicine },
        { name: "Hair Care", image: HairCare },
        { name: "Men's Grooming", image: Grooming },
        { name: "Skin Care", image: SkinCare },
        { name: "Fragrances & Deos", image: Fragrance },
        { name: "Makeup", image: Makeup },
      ],
    },
    {
      title: "Cleaning & Household",
      categories: [
        { name: "All Purpose Cleaners", image: Cleaners },
        { name: "Disposable & Garbage Bags", image: GarbageBags },
        { name: "Fresheners & Repellents", image: Repellents },
        { name: "Bins & Bathroom Ware", image:Bins  },
        { name: "Car & Shoe Care", image: car },
        { name: "Detergents & Dishwash", image: Dishwash },
        { name: "Mops, Brushes & Scrubs", image:Mops  },
      ],
    },
    {
      title: "Eggs, Meat & Fish",
      categories: [
        { name: "Eggs", image: eggs },
        { name: "Fish & Seafood", image: fish },
        { name: "Mutton & Lamb", image: mutton },
        { name: "Poultry", image: poultry },
        { name: "Sausages, Bacon & Salami", image: Bacon },
      ],
    },
    {
      title: "Gourmet & World Food",
      categories: [
        { name: "Cereals & Breakfast", image: Breakfast  },
        { name: "Chocolates & Biscuits", image: sweets },
        { name: "Cooking & Baking Needs", image: sweets },
        { name: "Dairy & Cheese", image: cheese },
        { name: "Drinks & Beverages", image: Drinks },
        { name: "Oils & Vinegar", image: Oils },
        { name: "Pasta, Soup & Noodles", image: Pasta },
        { name: "Sauces, Spreads & Dips", image: Dips },
        { name: "Snacks, Dry Fruits, Nuts", image: Nuts },
        { name: "Tinned & Processed Food", image: Food },
      ],
    },
    {
      title: "Baby Care",
      categories: [
        { name: "Baby Accessories", image: Accessories },
        { name: "Baby Bath & Hygiene", image: Hygiene },
        { name: "Baby Food & Formula", image: Formula },
        { name: "Diapers & Wipes", image: Wipes },
        { name: "Feeding & Nursing", image: Nursing },
        { name: "Mothers & Maternity", image: Maternity },
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
