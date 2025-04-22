import React, { useState } from 'react';
import BackgroundImage1 from '../assets/bg-1.jpg';
import BackgroundImage2 from '../assets/bg-2.jpg';
import BackgroundImage3 from '../assets/bg-3.jpg';
import BackgroundImage4 from '../assets/bg-4.jpg';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    };

    return (
        <div className="w-full h-auto overflow-hidden">
            <div className="w-screen h-screen relative">
                <div
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    className="w-full h-full flex transition-transform duration-1000"
                >
                    <div className="w-full h-full flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={BackgroundImage1}
                            alt="Image1"
                            loading="priority"
                        />
                    </div>
                    <div className="w-full h-full flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={BackgroundImage2}
                            alt="Image2"
                        />
                    </div>
                    <div className="w-full h-full flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={BackgroundImage3}
                            alt="Image3"
                        />
                    </div>
                    <div className="w-full h-full flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={BackgroundImage4}
                            alt="Image4"
                        />
                    </div>
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-20 bottom-40">
                    <div
                        onClick={prevSlide}
                        className="w-14 h-12 bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center hover:cursor-pointer duration-300"
                    >
                        <HiArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="w-14 h-12 bg-gray-700 hover:bg-gray-800 text-white flex items-center justify-center hover:cursor-pointer duration-300"
                    >
                        <HiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;