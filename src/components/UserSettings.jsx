import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCog } from 'react-icons/fa';

const UserSettings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('profile');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleSave = () => {
        alert('Cambios guardados');
    };

    return (
        <div className="flex flex-col md:flex-row p-6 gap-6">
            <div className="md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    <li className="flex items-center text-lg text-gray-700 hover:text-yellow-600 cursor-pointer">
                        <button
                            onClick={() => setActiveTab('profile')}
                            className="flex items-center"
                        >
                            <FaUser className="mr-2" /> Perfil
                        </button>
                    </li>
                    <li className="flex items-center text-lg text-gray-700 hover:text-yellow-600 cursor-pointer">
                        <button
                            onClick={() => setActiveTab('email')}
                            className="flex items-center"
                        >
                            <FaEnvelope className="mr-2" /> Correo electrónico
                        </button>
                    </li>
                    <li className="flex items-center text-lg text-gray-700 hover:text-yellow-600 cursor-pointer">
                        <button
                            onClick={() => setActiveTab('password')}
                            className="flex items-center"
                        >
                            <FaLock className="mr-2" /> Contraseña
                        </button>
                    </li>
                </ul>
            </div>
            <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Configuraciones de cuenta</h2>

                {activeTab === 'profile' && (
                    <div className="space-y-6 py-5">
                        <div className=''>
                            <div className='py-5'>
                                <label className="block text-sm font-medium text-gray-700 py-2">Nombre de usuario actual</label>
                                <label className="block text-sm  text-blue-600 pl-5 font-semibold">usuario</label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nuevo nombre de usuario</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'email' && (
                    <div className="space-y-6 py-5">
                        <div className=''>
                            <div className='py-5'>
                                <label className="block text-sm font-medium text-gray-700 py-2">Correo electrónico actual</label>
                                <label className="block text-sm  text-blue-600 pl-5 font-semibold">usuario@example.com</label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nuevo correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'password' && (
                    <div className="space-y-6 py-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Contraseña actual</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Nueva contraseña</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Repetir nueva contraseña</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder=""
                            />
                        </div>
                    </div>
                )}

                <div>
                    <button
                        onClick={handleSave}
                        className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;

/*<div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nuevo nombre de usuario"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nuevo correo electrónico"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Nueva contraseña"
                        />
                    </div>

                    <div>
                        <button
                            onClick={handleSave}
                            className="w-full bg-yellow-500  text-white p-3 rounded-lg hover:bg-yellow-600  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </div> */