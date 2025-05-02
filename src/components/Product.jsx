import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/amazonSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
    const dispatch = useDispatch();
    const [details, setDetails] = useState({});
    const [baseQty, setBaseQty] = useState(1);
    const location = useLocation();

    useEffect(() => {
        setDetails(location.state.item);
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

    return (
        <div className="min-h-screen px-4 py-10">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Imagen */}
                <div className="w-full lg:w-2/5 flex justify-center">
                    <img
                        className="w-full max-w-[400px] h-auto object-contain"
                        src={details.image}
                        alt="productImg"
                    />
                </div>

                {/* Detalles */}
                <div className="w-full lg:w-3/5 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold">{details.title}</h2>
                        <div className="flex items-center gap-4 mt-2">
                            <p className="line-through text-gray-500">${details.oldPrice}</p>
                            <p className="text-xl font-medium text-gray-900">${details.price}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-base">
                        <div className="flex text-yellow-500 text-lg">
                            <MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar />
                        </div>
                        <p className="text-sm text-gray-500">(1 Customer review)</p>
                    </div>

                    <p className="text-base text-gray-600">{details.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        {/* Selector de cantidad */}
                        <div className="flex items-center justify-between border p-3 rounded w-full sm:w-52 text-sm text-gray-600">
                            <p>Quantity</p>
                            <div className="flex items-center gap-3 font-semibold">
                                <button
                                    onClick={() => setBaseQty(baseQty > 1 ? baseQty - 1 : 1)}
                                    className="border px-2 py-1 hover:bg-gray-700 hover:text-white duration-300"
                                >
                                    -
                                </button>
                                <span>{baseQty}</span>
                                <button
                                    onClick={() => setBaseQty(baseQty + 1)}
                                    className="border px-2 py-1 hover:bg-gray-700 hover:text-white duration-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Botón de agregar */}
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
