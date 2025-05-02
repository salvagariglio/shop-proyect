// src/pages/Home.jsx
import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Discounts from '../components/Discounts'
import BuyNowSection from '../components/BuyNowSection'
import portadaHome from '../assets/portada.jpg'

const Home = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <div>
            <BuyNowSection
                imageSrc={portadaHome}
                title="Encuentra lo que necesitas"
                subtitle="Todo lo que buscás, lo tenés acá"
                showButton={true}
            />
            <div className="py-5">
                <Discounts products={products} category='women' />
            </div>

            <BuyNowSection
                imageSrc={portadaHome}
                title="Encuentra lo que necesitas"
                subtitle="Todo lo que buscás, lo tenés acá"
                showButton={true}
            />
            <div className="py-5">
                <Discounts products={products} category='jewelery' />
            </div>
            <BuyNowSection
                imageSrc={portadaHome}
                title="Encuentra lo que necesitas"
                subtitle="Todo lo que buscás, lo tenés acá"
                showButton={true}
            />
            <div className="py-5">
                <Discounts products={products} category='Electronics' />
            </div>
        </div>
    )
}

export default Home
