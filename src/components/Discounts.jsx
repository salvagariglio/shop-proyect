import React, { useState } from 'react';
import Discounts1 from '../assets/discounts.png';
import Discounts2 from '../assets/discounts2.png';
import Discounts3 from '../assets/discounts3.png';
import Discounts4 from '../assets/discounts4.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const slides = [
    { image: Discounts1 },
    { image: Discounts2 },
    { image: Discounts3 },
    { image: Discounts4 },
];

const Discounts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-[1400px] h-[700px] w-full m-auto py-24 px-14 relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                className="w-full h-full rounded-2xl bg-center bg-fit transition-all duration-700 ease-in-out"
            ></div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/30 text-white cursor-pointer sm:left-2 sm:text-xl sm:p-2">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/30 text-white cursor-pointer sm:right-2 sm:text-xl sm:p-2">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 flex gap-5 sm:gap-3">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`cursor-pointer transition-all duration-300 ${currentIndex === slideIndex
                            ? 'text-3xl text-yellow-600'  // Punto activo
                            : 'text-2xl text-black'     // Puntos inactivos
                            }`}
                    >
                        <RxDotFilled size={25} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discounts;
