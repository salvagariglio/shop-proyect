import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar, MdStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/amazonSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    const [baseQty, setBaseQty] = useState(1);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.item) {
            setDetails(location.state.item);
        }
    }, [location]);

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                _id: details._id,
                title: details.title,
                image: details.image,
                price: details.price,
                quantity: baseQty,
                description: details.description,
                category: details.category,
            })
        );
        toast.success(`${details.title} added to cart`);
    };

    // Parse rating: number, string, or { rate, count }
    let rawRating = null;
    if (details.rating != null) {
        if (typeof details.rating === 'number') {
            rawRating = details.rating;
        } else if (typeof details.rating === 'string') {
            rawRating = parseFloat(details.rating) || 0;
        } else if (typeof details.rating.rate === 'number') {
            rawRating = details.rating.rate;
        }
    }
    const rating = rawRating != null
        ? Math.min(Math.max(Math.round(rawRating), 0), 5)
        : null;

    // Always 5 stars, color based on rating
    const stars = rating != null
        ? Array.from({ length: 5 }, (_, i) =>
            i < rating
                ? <MdStar key={i} className="text-yellow-500 text-lg" />
                : <MdOutlineStar key={i} className="text-gray-400 text-lg" />
        )
        : [];

    const reviewCount = details.rating?.count ?? null;

    return (
        <div className="min-h-screen px-4 py-10">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Image */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <img
                        className="w-full max-w-[400px] h-auto object-contain"
                        src={details.image}
                        alt={details.title}
                    />
                </div>

                {/* Details */}
                <div className="w-full lg:w-3/5 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold">
                            {details.title}
                        </h2>
                        <div className="flex items-center gap-4 mt-2">
                            {details.oldPrice && (
                                <p className="line-through text-gray-500">
                                    ${details.oldPrice}
                                </p>
                            )}
                            <p className="text-xl font-medium text-gray-900">
                                ${details.price}
                            </p>
                        </div>
                    </div>

                    {/* Rating (only if exists) */}
                    {rating != null && (
                        <div className="flex items-center gap-2 text-base">
                            <div className="flex">{stars}</div>
                            {reviewCount != null && (
                                <p className="text-sm text-gray-500">
                                    ({reviewCount} review{reviewCount !== 1 ? 's' : ''})
                                </p>
                            )}
                        </div>
                    )}

                    <p className="text-base text-gray-600">{details.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* Quantity selector */}
                        <div className="flex items-center justify-between border p-3 rounded w-full sm:w-52 text-sm text-gray-600">
                            <p>Quantity</p>
                            <div className="flex items-center gap-3 font-semibold">
                                <button
                                    onClick={() => setBaseQty(q => Math.max(1, q - 1))}
                                    className="border px-2 py-1 hover:bg-gray-700 hover:text-white duration-300"
                                >
                                    -
                                </button>
                                <span>{baseQty}</span>
                                <button
                                    onClick={() => setBaseQty(q => q + 1)}
                                    className="border px-2 py-1 hover:bg-gray-700 hover:text-white duration-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart button */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-black text-white px-6 py-3 w-full sm:w-auto hover:bg-gray-800 transition"
                        >
                            Add to Cart
                        </button>
                    </div>

                    <p className="text-sm text-gray-500">
                        <span className="font-medium capitalize">Category:</span> {details.category}
                    </p>
                </div>
            </div>

            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default Product;