import React, {useState} from 'react'
import Discounts1 from '../assets/discounts.png'
import Discounts2 from '../assets/discounts2.png'
import Discounts3 from '../assets/discounts3.png'
import Discounts4 from '../assets/discounts4.png'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const slides = [
    { image: Discounts1},
    { image: Discounts2},
    { image: Discounts3},
    { image: Discounts4}
]

const Discounts = () => {
    const [currentIndex, setCurrentIndex]= useState(0)
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className=' max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group'>
            <div style={{backgroundImage:`url(${slides[0].image})`}} className=' w-full h-full rounded-2x1 bg-center duration-500'>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2x1 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className=' flex top-4 justify-center py-2 gap-5'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className=' text-2x1 cursor-pointer'>
                        <RxDotFilled size={25} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discounts
