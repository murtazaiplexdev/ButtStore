import React, { useState, useEffect } from "react";

const Product = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + props.category)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        // console.log(json);
      });
  }, []);

  return (
    <div className="row product-row">
      {console.log(products)}
      {products &&
        products.map((product, index) => {
          return (
            <div className="col-md-4 col-6 product-div" key={index}>
              <div className="card product">
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt="product image"
                />
                <div className="card-body text-center">
                  <h6 className="card-title text-uppercase mb-1">
                    {product.title}
                  </h6>
                  <p className="card-text mb-1">{product.description}</p>
                  <span className="product-prize"> {product.price}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Product;
