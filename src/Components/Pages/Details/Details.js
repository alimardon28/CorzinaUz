import React from "react";
import { useContext } from "react";
import { DataContext } from "../../../Context/Context";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Details = () => {
  const { products } = useContext(DataContext);

  return (
    <div className="productsDetails">
      <div className="productDetails">
        {
        products.map((data) => {
          return (
            <div className="orderidDetails" key={data.id}>
              <div className="details-product" >
                <img src={data.src} alt={`${data.title} + images`} />
              </div>
              <div className="detailsProducts">
                <div className="details-heading">
                  <h2 className="details-title">{data.title}</h2>
                </div>
                <div className="details-description">
                  <p className="descrition">{data.description}</p>
                </div>
                <div className="details-price">
                  <p className="detailsPrice">{data.price}</p>
                </div>
              </div>
              <Link to={''}>
                 <Button variant="contained"><i className="bi bi-cart"> Add To Card</i></Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Details;
