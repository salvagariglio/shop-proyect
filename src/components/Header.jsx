import React, { useState, useEffect } from 'react';

const Header = () => {
    const messages = [
        'Envío gratis a partir de $ 159.999',
        '3 y 6 Cuotas Sin Interés con monto mínimo'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % messages.length);
        }, 3000); // cambia cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Desktop: dos textos + barra */}
            <div className="hidden sm:flex items-center justify-center py-4 bg-gray-800">
                <div className="flex items-center justify-center space-x-4">
                    <h2 className="text-white font-semibold">{messages[0]}</h2>
                    <p className="text-white">|</p>
                    <h2 className="text-white font-semibold">{messages[1]}</h2>
                </div>
            </div>

            {/* Mobile: un texto a la vez, slide desde abajo */}
            <div className="sm:hidden relative py-4 bg-gray-800 overflow-hidden">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out transform ${currentIndex === idx
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-full opacity-0'
                            }`}
                    >
                        <h2 className="text-white">{msg}</h2>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Header;
