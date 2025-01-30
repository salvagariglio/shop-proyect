import React from 'react';

const CartCard = ({ item }) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-xl font-semibold text-gray-800">${item.price}</span>
                <div className="flex items-center space-x-2 mt-2">
                    <button className="bg-red-500 text-white px-2 py-1 rounded-md">Remove</button>
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        className="w-16 p-1 border rounded-md text-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartCard;

