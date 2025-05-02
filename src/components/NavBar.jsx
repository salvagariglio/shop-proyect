import React from 'react'
import logo from '../assets/logo.png'
import car from '../assets/carrito.png'
import userLogo from '../assets/usuario.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='w-full bg-white border-b border-gray-300 font-titleFont sticky top-0 z-50 shadow-sm min-h-[100px] py-3'>
            <div className='md:py-6 relative max-w-screen-xl mx-auto flex flex-col items-center'>

                {/* Logo a la izquierda */}
                <div className='absolute left-3 md:left-4 top-1/3 md:top-1/2 transform -translate-y-1/2'>
                    <Link to='/'>
                        <img className='w-28 md:w-60 h-auto' src={logo} alt='Logo' />
                    </Link>
                </div>

                {/* Iconos a la derecha */}
                <div className='items-center absolute right-4 top-1/3 md:top-1/2 transform -translate-y-1/2 flex gap-6'>
                    <Link to='/cart'>
                        <img className='w-6 md:w-9' src={car} alt='Carrito' />
                    </Link>
                    <Link to='/user'>
                        <img className='w-5 md:w-7' src={userLogo} alt='Usuario' />
                    </Link>
                </div>

                {/* Menú centrado, con espacio si baja */}
                <nav className=' w-full pt-14 md:pt-0 flex flex-wrap justify-center gap-x-10 gap-y-2'>
                    <Link to='/' className=' text-lg md:text-2xl font-bold text-black hover:text-yellow-500 hover:underline underline-offset-2'>
                        Home
                    </Link>
                    <Link to='/shop' className='text-lg md:text-2xl font-bold text-black hover:text-yellow-500 hover:underline underline-offset-2'>
                        Shop
                    </Link>
                    <Link to='/delivery' className='text-lg md:text-2xl font-bold text-black hover:text-yellow-500 hover:underline underline-offset-2'>
                        Delivery
                    </Link>
                </nav>

            </div>
        </div>
    )
}

export default NavBar
