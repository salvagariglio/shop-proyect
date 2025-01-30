import React, { useState } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdWarehouse } from "react-icons/md";

const Delivery = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleSelection = (method) => {
        setSelectedMethod(method);
        setIsModalOpen(true);
    };

    return (
        <div className='px-6 py-20 md:p-10 flex flex-col items-center justify-center gap-5 w-full max-w-4xl mx-auto'>
            <div className='w-full text-center'>
                <div className='py-5'>
                    <p className='text-lg text-gray-700'>
                        Tienes registrado el siguiente correo <span className='font-semibold text-black'>usuario@example.com</span>
                    </p>
                    <a className='font-bold cursor-pointer underline text-blue-600 hover:text-blue-800'>
                        Cambiar cuenta de correo
                    </a>
                </div>
                <div className='py-5'>
                    <p className='text-xl font-semibold text-black'>Elige un método de entrega</p>
                    <p className='text-gray-600 text-sm'>Para brindarte una mejor experiencia de compra, indícanos cómo te gustaría recibir tu pedido</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 w-full'>
                <button
                    onClick={() => handleSelection('delivery')}
                    className={`w-full md:w-1/2 border-2 rounded-lg overflow-hidden hover:border-yellow-400 transition-all ${selectedMethod === 'delivery' ? 'border-yellow-400' : 'border-gray-700'}`}>
                    <div className='flex items-center justify-center bg-gray-100 p-5'>
                        <TbTruckDelivery size={120} className='text-gray-700' />
                    </div>
                    <div className='p-5 text-center'>
                        <p className='font-bold text-lg'>Envío a domicilio</p>
                        <p className='text-gray-600 text-sm'>Monto mínimo de compra $3500</p>
                    </div>
                </button>
                <button
                    onClick={() => handleSelection('pickup')}
                    className={`w-full md:w-1/2 border-2 rounded-lg overflow-hidden hover:border-yellow-400 transition-all ${selectedMethod === 'pickup' ? 'border-yellow-400 ' : 'border-gray-700'}`}>
                    <div className='flex items-center justify-center bg-gray-100 p-5'>
                        <MdWarehouse size={120} className='text-gray-700' />
                    </div>
                    <div className='p-5 text-center'>
                        <p className='font-bold text-lg'>Retiro en depósito</p>
                        <p className='text-gray-600 text-sm'>Monto mínimo de compra $2000</p>
                    </div>
                </button>
            </div>
            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg shadow-lg w-96 text-center'>
                        <p className='text-gray-700 mt-2'>Has seleccionado {selectedMethod === 'delivery' ? 'Envío a domicilio' : 'Retiro en depósito'}.</p>
                        {selectedMethod === 'delivery' && (
                            <div className='mt-4'>
                                <label className='block text-gray-700 font-semibold'>Dirección de envío</label>
                                <input
                                    type='text'
                                    className='w-full mt-2 p-2 border border-gray-300 rounded-md'
                                    placeholder='Ingresa tu dirección'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        )}
                        <div className='mt-4'>
                            <label className='block text-gray-700 font-semibold'>Selecciona una fecha</label>
                            <input
                                type='date'
                                className='w-full mt-2 p-2 border border-gray-300 rounded-md'
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date(Date.now()).toISOString().split("T")[0]} // Fecha mínima: 5 días desde hoy
                                max={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]} // Fecha máxima: 5 días a partir de hoy
                            />
                        </div>

                        <div className='mt-4'>
                            <label className='block text-gray-700 font-semibold'>Selecciona un horario</label>
                            <select
                                className='w-full mt-2 p-2 border border-gray-300 rounded-md'
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            >
                                <option value=''>Selecciona un horario</option>
                                {[...Array(7)].map((_, i) => (
                                    <option key={i} value={`${9 + i}:00`}>{`${9 + i}:00`}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full flex flex-row items-center justify-center gap-4 pt-6">
                            <button
                                className="w-44 h-12 px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-all"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cerrar
                            </button>
                            <button className="w-44 h-12 border border-black rounded-md bg-black text-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">
                                Confirmar
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Delivery;

/*<div className='w-full flex flex-col md:flex-row items-center justify-center gap-5 pt-6'>
    <button className='w-full md:w-44 h-12 border border-black rounded-md bg-gray-100 text-black hover:bg-yellow-400 transition-all duration-300'>
        Agregar otra dirección
    </button>
    <button className='w-full md:w-44 h-12 border border-black rounded-md bg-black text-white hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300'>
        Confirmar
    </button>
</div>*/