// src/components/ProceedToCheckout.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/amazonSlice';

export default function ProceedToCheckout() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.amazon.products);
    const token = useSelector(state => state.auth.jwt);
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        if (!products.length) return;
        setLoading(true);
        try {
            // 1) Llamada a Strapi para crear la orden y la preferencia MP
            const res = await fetch('http://localhost:1337/mercadopago/preference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Si tienes auth en Strapi, incluye el JWT:
                    Authorization: token ? `Bearer ${token}` : undefined,
                },
                body: JSON.stringify({ items: products }),
            });
            if (!res.ok) throw new Error('Error al crear preferencia');
            const { init_point } = await res.json();

            // 2) Limpias el carrito (opcional)
            dispatch(clearCart());

            // 3) Rediriges al checkout de Mercado Pago
            window.location.href = init_point;
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert('No se pudo iniciar el pago. Reintenta más tarde.');
        }
    };

    return (
        <button
            onClick={handleCheckout}
            disabled={loading || !products.length}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded disabled:opacity-50"
        >
            {loading ? 'Redirigiendo...' : 'Proceed to checkout'}
        </button>
    );
}
