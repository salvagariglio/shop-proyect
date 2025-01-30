import React from 'react'
import CartSection from '../components/CartSection'
import {useSelector} from 'react-redux'

const Cart = () => {
    const productData = useSelector((state) )
    return (
        <div>
            <CartSection />
        </div>
    )
}

export default Cart
