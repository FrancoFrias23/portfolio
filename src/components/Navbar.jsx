import React, { useState } from 'react'
import {GoThreeBars,GoX} from "react-icons/go"

export default function NavBar() {
    const [navOpen,setNavOpen]=useState(false);
    const links = [
        {  
            id:1,
          link:"Home"
        },
        {  
            id:2,
          link:"Contact"
        },
        {  
            id:3,
          link:"Portfolio"
        },
        {  
            id:4,
          link:"About"
        },
        {  
            id:5,
          link:"Experience"
        }
    ]
  return (<div>

  
    <div className='flex w-full h-25 items-center px-2 justify-between text-white bg-black fixed '> 
        <div>
           <h1 className='text-4xl font-cinzel '>Franco</h1>
        </div>
        <ul className='justify-between gap-6 items-center hidden md:flex'>
                 {links.map((e)=><li key={e.id} className='text-xl font-cinzel cursor-pointer px-2 hover:scale-105'>{e.link}</li>)}
        </ul>
        <div onClick={()=>setNavOpen(!navOpen)} className='cursor-pointer text-gray-400 pr-3 pz-7 hover:scale-105 md:hidden' >
             {
               !navOpen? <GoThreeBars size={30} className='text-5xl'/>:<GoX size={30} className='text-5xl'/>
             }
        </div></div>
        <div>
            {
            navOpen &&
             <ul className='flex flex-col items-center justify-center w-full h-screen top-0 left-0 bg-gradient-to-b from-black to-red-800'>
                {links.map((e)=><li key={e.id} className='text-2xl py-5 text-white decoration-solid font-cinzel  cursor-pointer px-2 hover:scale-105'>{e.link}</li>)}
            </ul>
            }
            
        </div>
        
    </div>
  )
}

