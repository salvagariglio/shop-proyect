import React from 'react'
import CartSection from '../components/CartSection'
import { useSelector } from 'react-redux'
import { productsData } from '../api/Api'

const Cart = () => {
    const productsData = useSelector((state) => state.amazon.products)
    return (
        <div>
            <CartSection />
        </div>
    )
}

export default Cart
