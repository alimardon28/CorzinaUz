import React from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Context/Context';

const Products = () => {

    const { products } = DataContext;



    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}

export default Products;
