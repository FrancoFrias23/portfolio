import React from 'react'
import FrancoImagen from "../assets/foto.png"
import {VscRocket} from 'react-icons/vsc'
export default function Home() {
  return (
    <div name="Home" className=' bg-gradient-to-b from-black to-red-950 w-full h-screen'>       
            <div className='flex items-center justify-center h-full px-3 md:flex-row max-w-screen-lg mx-auto'>
                <div className='font-josefin text-white w-1/3'>
                    <h2 className='text-3xl py-2'>I'm Web Developer</h2>
                    <p className='text-xl'>Recently graduated, passionate about new technologies and teamwork methods.
                     I like to get the best out of every experience, that's why I'm constantly looking for new challenges to grow.
                    </p>
                    <button className='flex bg-orange-400 p-3 rounded-lg my-2 hover:bg-black'>See my portfolio <VscRocket className='mx-1'/> </button>
                </div>
                <div>
                  <img className='mx-auto w-2/3 md:w-full' src={FrancoImagen} alt="my Photo"></img>
                </div>
            </div>        
    </div>
  )
}
