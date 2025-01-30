import React from 'react'
import logo2 from '../assets/negocio.png'
import creditCards from '../assets/creditcards.png'
import {
    FaYoutube,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaHome
} from 'react-icons/fa'
import { BsPersonFill, BsPaypal } from 'react-icons/bs'



const Footer = () => {
    return (
        <div className='bg-black text-gray-400 px-5 py-3'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-3 px-2'>
                <div className='flex flex-col gap-5'>
                    <img src={logo2} className="w-14 brightness-200  contrast-125 saturate-150" />
                    <img className='w-40' src={creditCards} alt='credit cards' />
                    <div className='flex gap-7 text-lg text-gray-400'>
                        <a href='https://www.youtube.com/user/amazon'>
                            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                        </a>
                        <a href='https://www.facebook.com/Amazon/'>
                            <FaFacebook className='hover:text-white duration-300 cursor-pointer' />
                        </a>
                        <a href='https://www.instagram.com/amazon/'>
                            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
                        </a>
                        <a href='https://twitter.com/amazon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
                            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <BsPersonFill />
                            </span>
                            My account
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <BsPaypal />
                            </span>
                            Checkout
                        </p>
                        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
                            <span>
                                <FaHome />
                            </span>
                            Order tracking
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold text-white mb-4'>Contact us</h2>
                    <div className='text-base flex flex-col gap-2'>
                        <p>1-888-280-4331</p>
                        <p>clientes@amazon.es</p>
                        <p></p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <input className='bg-transparent border px-4 py-2 text-sm' placeholder='E-mail' type='email' />
                    <button className='hover:text-white duration-300 cursor-pointer'>Suscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
