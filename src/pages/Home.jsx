import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner'
import Discounts from '../components/Discounts'
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
    }, [data]);

    return (
        <div>
            <Banner />
            <div className='py-20'>
                <Discounts products={products} />
            </div>
        </div>
    )
}

export default Home
