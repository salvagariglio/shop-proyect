import React, { useState, useEffect } from 'react';
import BackgroundImage1 from '../assets/bg-1.jpg';
import BackgroundImage2 from '../assets/bg-2.jpg';
import BackgroundImage3 from '../assets/bg-3.jpg';
import BackgroundImage4 from '../assets/bg-4.jpg';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3, BackgroundImage4];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Cambiar al siguiente slide automáticamente cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ width: `${images.length * 100}vw`, transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="w-screen h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-screen flex-shrink-0">
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Botones manuales */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 bg-black/60 text-white flex items-center justify-center rounded-full hover:bg-black transition"
                >
                    <HiArrowLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 bg-black/60 text-white flex items-center justify-center rounded-full hover:bg-black transition"
                >
                    <HiArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default Banner;
