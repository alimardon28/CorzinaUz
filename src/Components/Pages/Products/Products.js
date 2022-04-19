import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/Context";
import '../Products/Products.css';

const Products = () => {
  const { products } = useContext(DataContext);


  return (
    <div className="products">
      <ul className="productsList">
        {products.map((item) => {
          return (
            <Link to={`/product/${item.id}`} className="productsLink" key={item.id}>
              <li className="productsItem" >
                <div className="productsImages">
                  <img src={item.src} alt={`${item.title} + images`} />
                </div>
                <div className="productsHeading">
                  <h2 className="productsTitle">{item.title}</h2>
                </div>
                <div className="productsContent">
                  <p className="products-content">{item.content}</p>
                </div>
                <div className="productsPrice">
                  <p className="products-price">$ {item.price}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
