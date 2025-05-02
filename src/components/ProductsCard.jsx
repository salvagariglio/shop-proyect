import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/amazonSlice';
import { toast } from 'react-toastify';

const ProductsCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/product/${product._id}`, {
            state: {
                item: product,
            },
        });
    };

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                _id: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                description: product.description,
                category: product.category,
            })
        );
        toast.success(`${product.title} added to cart`);
    };

    return (
        <div className="group relative">
            <div
                onClick={handleDetails}
                className="w-full cursor-pointer overflow-hidden h-48 sm:h-80 md:h-96"
            >
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={product.image}
                    alt={product.title}
                />
            </div>
            <div className="w-full px-2 py-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-titleFont text-base font-bold">
                        {product.title.substring(0, 15)}
                    </h2>
                </div>
                <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
                    <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                        {product.oldPrice != null && (
                            <p className="line-through text-gray-500">
                                ${product.oldPrice}
                            </p>
                        )}
                        <p className="font-semibold">
                            ${product.price}
                        </p>
                    </div>
                    <p
                        onClick={handleAddToCart}
                        className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
                    >
                        Add to cart
                        <span>
                            <BsArrowRight />
                        </span>
                    </p>
                </div>
                <p className="mt-2 text-sm text-gray-600">{product.category}</p>
                {product.isNew && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-black text-white font-semibold px-4 py-1 text-xs">
                            Sale
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsCard;
