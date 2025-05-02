// src/components/BuyNowSection.jsx
import React from 'react'

const BuyNowSection = ({
    imageSrc,
    title,
    subtitle,
    showButton = false,
}) => {
    return (
        <section className="relative w-full h-[600px]">
            {/* Imagen de fondo */}
            <a href='/shop' >
                <img
                    src={imageSrc}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Contenido encima */}
                <div className="relative z-10 flex flex-col py-20 h-full px-8 space-y-4">
                    <h2 className="text-white text-5xl font-bold">
                        {title}
                    </h2>

                    {subtitle && (
                        <p className="text-white text-2xl">
                            {subtitle}
                        </p>
                    )}

                    {showButton && (
                        <button className="self-start bg-white text-black font-semibold py-3 px-8 rounded">
                            COMPRA AHORA
                        </button>
                    )}
                </div>
            </a>
        </section>
    )
}

export default BuyNowSection
