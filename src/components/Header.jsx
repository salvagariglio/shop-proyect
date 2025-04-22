import React from 'react'
import logo from '../assets/logo.png'
import car from '../assets/carrito.png'
import userLogo from '../assets/usuario.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <img className=' justify-center items-start w-24 h-auto' src={logo} alt='amazonLogo'></img>
                </Link>
                <div className=' px-10'>
                    <ul className='flex items-center gap-10'>
                        <Link to='/'
                            className='text-base text-black font-bold underline-offset-2 decoration-[1px] cursor-pointer duration-300 hover:text-yellow-500 hover:underline'>
                            Home
                        </Link>
                        <Link to='/shop'
                            className='text-base text-black font-bold underline-offset-2 decoration-[1px] cursor-pointer duration-300 hover:text-yellow-500 hover:underline'>
                            Shop
                        </Link>
                        <Link to='/delivery'
                            className='text-base text-black font-bold underline-offset-2 decoration-[1px] cursor-pointer duration-300 hover:text-yellow-500 hover:underline'>
                            Delivery
                        </Link>
                        <Link to='/cart' >
                            <div className='relative'>
                                <img className='w-6' src={car} alt='shop car'></img>
                            </div>
                        </Link >
                        <Link to='/user' >
                            <div className='relative'>
                                <img className='w-4 p-0' src={userLogo} alt='user'></img>
                            </div>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header   
