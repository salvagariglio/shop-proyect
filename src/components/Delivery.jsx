import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdWarehouse } from "react-icons/md";
// import datausuario from 'datausuario.json'


const Delivery = () => {
    return (
        <div className=' p-10 items-center justify-center gap-5'>
            <div className='items-center justify-center'>
                <div className=' py-5'>
                    <p className=''> 
                        Tenes registrado el siguiente correo {} 
                    </p>
                    <a className=' font-black cursor-pointer underline'> 
                        Cambiar cuenta de correo 
                    </a>
                </div>
                <div className=' py-5'>
                    <p className=''> 
                        Elegi un metodo de entrega 
                    </p>
                    <p className=''> 
                        Para brindarte una mejor experiencia de compra, indicanos como te gustaria recibir tu pedido
                    </p>
                </div>
            </div>
            <div className=' flex items-center justify-center p-10 gap-10 '>
                <button className=' rounded-md border-2 border-black  '>
                    <div  className=' items-center justify-center flex p-5' >
                        <TbTruckDelivery size={200}/>
                    </div>
                    <div className='p-5'>
                        <p  className='font-bold' > Envio a domicilio</p>
                        <p  className='' > Monto minimo de compra $3500</p>
                    </div>
                </button>
                <button className='rounded-md border-2 border-black '>
                    <div className=' items-center justify-center flex p-5'>
                        <MdWarehouse size={200}/>
                    </div>
                    <div className=' p-5'>
                        <p  className='font-bold' > Retiro en deposito </p>
                        <p  className='' > Monto minimo de compra $2000</p>
                    </div>
                </button>
            </div>
            <div className=''>
                <p className=''></p>
                <p className=''></p>
                <div className=''>
                    <button>

                    </button>
                </div>
            </div>
            <div className='p-10 items-center justify-center flex gap-10'>
                <div  className=' flex items-center justify-center border-black rounded-md border  px-5 bg-gray-100 text-black hover:bg-yellow-400 transition-all duration-300 ease-out'>
                    <button className='w-44 h-10 '>
                        Agregar otra direccion
                    </button>
                </div>
                <div className=' flex items-center justify-center rounded-md border  px-5 hover:border-yellow-400 text-gray-100 hover:text-yellow-400 bg-black transition-all duration-300 ease-out'>
                    <button className='  w-44 h-10'>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Delivery