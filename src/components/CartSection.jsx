import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartCard from './CartCard';
import { clearCart } from '../redux/amazonSlice';

const CartSection = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.amazon.products);

    const [loading, setLoading] = useState(false);

    const subtotal = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.05;
    const shipping = products.length > 0 ? 5.99 : 0;
    const total = subtotal + tax + shipping;

    const handleCheckout = async () => {
        if (!products.length) return;
        setLoading(true);

        try {
            const res = await fetch('http://localhost:1337/mercadopago/preference', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: products.map(p => ({
                        title: p.title,
                        price: p.price,
                        quantity: p.quantity,
                        image: p.image,
                    }))
                }),
            });

            if (!res.ok) throw new Error('Error creando preferencia');

            const { init_point } = await res.json();

            // vaciamos el carrito
            dispatch(clearCart());

            // redirigimos al checkout de MP
            window.location.href = init_point;
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert('No se pudo iniciar el pago. Intenta más tarde.');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
                    <div className="flex flex-col gap-4">
                        {products.length > 0 ? (
                            products.map((item) => <CartCard key={item._id} item={item} />)
                        ) : (
                            <p className="text-gray-500">Your cart is empty 🛒</p>
                        )}
                    </div>
                </div>

                {products.length > 0 && (
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>

                            <div className="flex justify-between text-lg mb-2">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-lg mb-2">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-lg mb-2">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-semibold text-gray-800">${shipping.toFixed(2)}</span>
                            </div>

                            <div className="flex justify-between text-xl font-semibold text-gray-800 mb-4">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={loading || !products.length}
                                className="w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition duration-200 disabled:opacity-50"
                            >
                                {loading ? 'Redirigiendo...' : 'Proceed to Checkout'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSection;
