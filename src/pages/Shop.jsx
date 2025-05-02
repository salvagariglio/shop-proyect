// src/pages/Shop.jsx
import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Products from '../components/Products'
import BuyNowSection from '../components/BuyNowSection'
import portadaShop from '../assets/portada.jpg'

const Shop = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <div>


            <Products products={products} />
        </div>
    )
}

export default Shop
