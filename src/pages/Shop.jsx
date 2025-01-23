import React from 'react'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
import Products from '../components/Products'
import Discounts from '../components/Discounts'

const Shop = () => {

    const [products, setProducts]= useState([])
    
    const data = useLoaderData()
    
    useEffect(()=>{
        if (data && data.data) {
            setProducts(data.data)
        }
        }, [data])

    return (
        <div>
            <Discounts />
            <Products products={products}  />
        </div>
    )
}

export default Shop
