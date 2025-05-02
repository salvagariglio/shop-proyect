// src/pages/Home.jsx
import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import Discounts from '../components/Discounts'
import BuyNowSection from '../components/BuyNowSection'
import portadaWomen from '../assets/portada1.jpg'
import portadaJewllery from '../assets/portada2.jpg'
import portadaTech from '../assets/portada3.jpg'

const Home = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [data])

    return (
        <div className='pb-20'>
            <BuyNowSection
                imageSrc={portadaWomen}
                title="Encuentra lo que necesitas"
                subtitle="Todo lo que buscás, lo tenés acá"
                showButton={true}
            />
            <div className="py-5">
                <Discounts products={products} category='women' />
            </div>

            <BuyNowSection
                imageSrc={portadaJewllery}
                title="Encuentra lo que necesitas"
                subtitle="Todo lo que buscás, lo tenés acá"
                showButton={true}
            />
            <div className="py-5">
                <Discounts products={products} category='jewelery' />
            </div>
            <BuyNowSection
                imageSrc={portadaTech}
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
