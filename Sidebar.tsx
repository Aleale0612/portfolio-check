"use client"


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Iconig } from './Iconsvg';
import { Iconli } from './Iconsvg';
import { Icontiktok } from './Iconsvg';
import { Icongithub } from './Iconsvg';
import { useTheme } from '../themes/Theme';


const Sidebar = () => {

    const {darkMode}=useTheme()


  return (
    <div className='lg:fixed z-20 absolute flex justify-evenly flex-col items-center w-[90%]  lg:w-[350px] h-[680px] lg:h-[88%] left-5 rounded-3xl mt-10 border text-white border-gray-400'>
        <div className='flex flex-row h-max w-[80%] justify-between'>
            <h1 className='text-3xl'>ByFarhan.</h1>
            <h1 className='w-[70px] font-regular text-sm'>Backend Developer</h1>
        </div>
        <Image src='/foto.jpg' alt='foto' width={500} height={500} className='w-[250px] mt-2 h-[210px] object-cover rounded-3xl border-[2px] border-gray-400'  />
        <div className='w-full mt-9 text-center font-light'>
        <h1 className='text-xl font-bold '>Farhan Gusti Pamungkas</h1>
        <h1 className='text-xl text-gray-400'>Base In Samarinda,Indonesia</h1>
        </div>
        <p className='text-[12px] font-light'>©Copyright ByFarhan. All Right Reserved </p>
        <div className={`w-[70%] h-auto flex items-center mt-7 mb-2 flex-row justify-evenly`}>
          <Link href='https://www.instagram.com/farhangustii/'>
          <div className={`w-[50px] h-[50px]  flex justify-center items-center border-[2px] transition-all ease-in ${darkMode ? "border-black hover:shadow-blue-aura" : "border-white hover:shadow-white-aura  "} p-3 rounded-full `}>
            <Iconig />
          </div>
          </Link>
          <Link href='https://www.linkedin.com/in/farhan-gusti-pamungkas-060804gfg/' >
          <div className={`w-[50px] h-[50px]  flex justify-center items-center border-[2px] transition-all ease-in ${darkMode ? "border-black hover:shadow-blue-aura" : "border-white hover:shadow-white-aura  "} p-3 rounded-full `}>
        <Iconli />
          </div>
          </Link>
          <Link href='' >
          <div className={`w-[50px] h-[50px]  flex justify-center items-center border-[2px] transition-all ease-in ${darkMode ? "border-black hover:shadow-blue-aura" : "border-white hover:shadow-white-aura  "} p-3 rounded-full `}>
         <Icontiktok />
          </div>
          </Link> 
          <Link href='https://github.com/Aleale0612' >
          <div className={`w-[50px] h-[50px]  flex justify-center items-center border-[2px] transition-all ease-in ${darkMode ? "border-black hover:shadow-blue-aura" : "border-white hover:shadow-white-aura  "} p-3 rounded-full `}>
         <Icongithub />
          </div>
          </Link>
        </div>
        <a className='w-full flex flex-row justify-center' href="mailto:sayafarhangustipamungkas@gmail.com?subject=Hai%20Farhan&body=I'm%20interested%20in%20your%20portfolio!">
      <div className='p-3 hover:shadow-white-aura cursor-pointer transition-all ease-in flex flex-row justify-center gap-3 w-[85%] items-center border mb-2 border-white font-light rounded-3xl'>
        <Image src='/mail.png' alt='mail' width={20} height={20} className='w-[20px] h-[20px]' />
        <h1>Hire Me</h1>
      </div>
    </a>

    </div>
  )
}

export default Sidebar