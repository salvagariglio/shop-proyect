import React from 'react';
import CartCard from './CartCard';

const CartSection = ({ items }) => {
    if (!Array.isArray(items)) {
        // Si `items` no es un array, se retorna un mensaje de error o un estado vacío
        return <p className="text-lg text-gray-600">Invalid cart data.</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Shopping Cart</h2>
            <div className="space-y-6">
                {items.length === 0 ? (
                    <p className="text-lg text-gray-600">Your cart is empty.</p>
                ) : (
                    items.map((item) => <CartCard key={item.id} item={item} />)
                )}
            </div>
        </div>
    );
};

export default CartSection;

