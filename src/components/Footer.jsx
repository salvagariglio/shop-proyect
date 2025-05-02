import React from 'react';
import logo2 from '../assets/negocio.png';
import creditCards from '../assets/creditcards.png';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaHome } from 'react-icons/fa';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => (
    <footer className="bg-black text-gray-400">
        {/* Sección principal */}
        <div className="max-w-screen-xl mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo + tarjetas + redes */}
            <div className="flex flex-col gap-6">
                <img src={logo2} alt="Logo" className="w-14 brightness-200 contrast-125 saturate-150" />
                <img src={creditCards} alt="Formas de pago" className="w-40" />
                <div className="flex gap-6 text-xl">
                    <a href="https://www.youtube.com/user/amazon" className="hover:text-white transition">
                        <FaYoutube />
                    </a>
                    <a href="https://www.facebook.com/Amazon/" className="hover:text-white transition">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/amazon/" className="hover:text-white transition">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/amazon" className="hover:text-white transition">
                        <FaTwitter />
                    </a>
                </div>
            </div>

            {/* Profile */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                <ul className="space-y-3 text-base">
                    <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                        <BsPersonFill /> My account
                    </li>
                    <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                        <BsPaypal /> Checkout
                    </li>
                    <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                        <FaHome /> Order tracking
                    </li>
                </ul>
            </div>

            {/* Contact us */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact us</h2>
                <div className="space-y-2 text-base">
                    <p>1-888-280-4331</p>
                    <p>clientes@amazon.es</p>
                    <p>Av. Siempre Viva 742, Córdoba, Argentina</p>
                </div>
            </div>

            {/* Newsletter */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Newsletter</h2>
                <form className="flex flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Your e-mail"
                        className="w-full bg-transparent border border-gray-600 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-5 py-4 text-center text-sm text-gray-500">
                &copy; Salvador Gariglio | +54 9 3586 00 3241. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
