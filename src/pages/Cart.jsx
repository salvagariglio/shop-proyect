import React from 'react';
import CartSection from '../components/CartSection';

const CartPage = () => {
    // Simulación de productos en el carrito
    const cartItems = [
        {
            "_id": 1,
            "title": "Long sleeve Jacket",
            "isNew": true,
            "oldPrice": "200",
            "price": 150,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
            "category": "women",
            "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
            "rating": 4
        },
        {
            "_id": 2,
            "title": "Jacket with wollen hat",
            "isNew": true,
            "oldPrice": "70",
            "price": 65,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
            "category": "women",
            "image": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600",
            "rating": 3
        },
    ];

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="bg-gray-50 min-h-screen">
            <CartSection items={cartItems} />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                    <div className="flex justify-between text-lg mb-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold text-gray-800">${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg mb-2">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-semibold text-gray-800">$5.99</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold text-gray-800 mb-4">
                        <span>Total</span>
                        <span>${(totalAmount + 5.99).toFixed(2)}</span>
                    </div>
                    <button className="w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition duration-200">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

