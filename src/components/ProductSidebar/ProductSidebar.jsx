import React from 'react'
import { Accordion, Row, Col, AccordionHeader } from 'react-bootstrap'
import "./ProductSidebar.css";

const ProductSidebar = () => {
    const categories=[
        {
            name: 'Fruits',
            subcategories:['Herbs & Seasonings','cherry','Exotic Foods & Veggies','Organic Food & Vegetables','Cuts & Sprouts','Flower Bouquets,Bunches','Fresh Fruits']
        },
        {
            name: 'Beverages',
            subcategories:['Water','Tea','Coffee','Health Drink,Supplements','Fruit Juices & Drinks']
        },
        {
            name: 'Foodgrains, Oils & Masalas',
            subcategories:['Atta,Flour & Sooji','Dals & Pulses','Rice & Rice Products','Organic Staples','Salt,Sudat & Jaggery','Edible Oils & Ghee','Masalas & Spices','Dry Fruits']
        },
        {
            name: 'Bakery,Cakes & Dairy',
            subcategories:['Bakery Snacks','Bakery Snacks','Breads & Buns','Cakes & Pastries','Cookies,Rusk & Khari','Dairy','Gourmet Breads','Ice Creams & Desserts']
        },
        {
            name: 'Snacks & Branded Foods',
            subcategories:['Breakfast Cereals','Biscuits & Cookies','Frozen Veggi & Snacks','Spreads,Sauces,Ketchup','Snacks & Namkeens','Ready to Cook & Eat','Chocolate & Candies','Pickles & Chutney','Indian Mithai']
        },
        {
            name: 'Beauty & Hygiene',
            subcategories:['Oral Care','Bath & Hand Wash','Health & Medicine','Hair Care','Mens Grooming','Skin Care','Frangrances & Deos','Makeup']
        },
        {
            name: 'Cleaning & Household',
            subcategories:['All Purpose Cleaners','Disposable & Garbage Bag','Bins & Bathroom Ware','Car & Shoe Care','Detergents & Dishwash','Mops,Brushes & Scrubs','Party & Festive Needs','Pooja Needs','Stationery']
        },
        {
            name: 'Kitchen,Garden & Pets',
            subcategories:['Appliances & Electricals','Bakeware','Cookware & Non Stick','Crockery & Cutlery','Flask & Casserole','Gardening','Kitchen Accessories','Steel Utensils','Storage & Accessories']
        },
        {
            name: 'Egg,Meat & fish',
            subcategories:['Eggs','Fish & Seafood','Mutton & Lamb','Poultry','Sausages,Bacon & Salami']
        },
        {
            name: 'Gourmet & Worldfood',
            subcategories:['Cereals & Breakfast','Chocolates & Biscuits','Cooking & Baking Needs','Dairy & Cheese','Drinks & Beverages','Oils & Vinegar','Pasta,Soup & Noodles','Sauces,Spreads & Dips','Snacks,Dry Fruits,Nuts','Tinned & Processed Food']
        },
        {
            name: 'Baby Care',
            subcategories:['Baby Accessories','Baby Bath & Hygiene','Baby Food & Formula','Diapers & Wipes','Feeding & Nursing','Mothers & Maternity']
        }
    ];
  return (
    <Row>
      <Col
        md={4}
        className="sidebar" >
        <Accordion>
          {categories.map((category, index) => (
            <Accordion.Item
              className='aitems'
              eventKey={category.name}
              key={index}>
              <Accordion.Header>{category.name}</Accordion.Header>
              <Accordion.Body>
                {category.subcategories.length > 0 ? (
                  <a href='' className='litems'>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex}>{subcategory}</li>
                    ))}
                  </a>
                ) : (
                  <p>No subcategories available.</p>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Col>
      <Col md={8}></Col>
    </Row>
  );
}

export default ProductSidebar
