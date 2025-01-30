import React from 'react';
import ProductsCard from './ProductsCard';

const Products = ({ products }) => {
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                    Shopping Every Day
                </h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center px-4'>
                    Discover a world of products at your fingertips. From cutting-edge electronics
                    to trendy fashion, home essentials, and more, we bring you the best deals every day.
                    Shop with confidence and enjoy fast delivery, easy returns, and exceptional customer service.
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((item) => (
                    <ProductsCard key={item._id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default Products;