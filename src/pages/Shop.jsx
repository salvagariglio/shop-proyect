import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from '../components/Products';
import Discounts from '../components/Discounts';

const Shop = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, [data]);

    return (
        <div>
            <Discounts products={products} />
            <Products products={products} />
        </div>
    );
};

export default Shop;
