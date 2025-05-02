import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductsCard from './ProductsCard';

const Discounts = ({ products }) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    if (!Array.isArray(products) || products.length === 0) return null;

    const newProducts = products.filter(item => item.isNew);
    if (newProducts.length === 0) return null;

    const shuffledProducts = [...newProducts].sort(() => Math.random() - 0.5);



    return (
        <div className="relative py-10 max-w-screen-xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Discounts & New Arrivals</h2>

            {/* Flechas fuera del carrusel */}
            <div
                ref={prevRef}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black hover:text-yellow-500 transition"
            >
                <FaArrowLeft size={30} />
            </div>
            <div
                ref={nextRef}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black hover:text-yellow-500 transition"
            >
                <FaArrowRight size={30} />
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        if (swiper.params?.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    });
                }}

                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {shuffledProducts.map(product => (
                    <SwiperSlide key={product._id}>
                        <ProductsCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Discounts;
