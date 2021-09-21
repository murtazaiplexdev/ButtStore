import React, { useState, useEffect } from "react";
import Product from "../products/product";

const Categories = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <div className="categories-section">
      {Categories.map((category, index) => {
        return (
          <section className="category-section" key={index}>
            <h2>{category}</h2>
            <Product category={category} />
          </section>
        );
      })}
    </div>
  );
};

export default Categories;
