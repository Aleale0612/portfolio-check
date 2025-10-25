"use client"

import { BackgroundBeams } from './component/ui/Background'
import Sidebar from './component/Sidebar'
import React from 'react'
import Image from 'next/image'

const page = () => {


  const keProject = () =>{
    const project = document.getElementById('project')
    if (project){
      project.scrollIntoView({behavior : "smooth"})
    }
  }

  return (
    <div className='w-full h-auto pb-[500px] lg:pb-[250px] bg-black'>
      <Sidebar />
      <BackgroundBeams className='mt-[700px]  lg:mt-0' />
      <div className='lg:w-[60%] w-[90%] ml-5 lg:ml-[35%] h-auto flex flex-col'>
        <div className='flex flex-row justify-evenly border border-white rounded-3xl mt-[220%]  lg:mt-16 gap-2 items-center w-[140px] p-2'>
          <Image src='/homebaru.png' alt='home' width={500} height={500} className='w-[15px] h-[15px]' />
          <p className='text-white  text-[10px]'>INTRODUCTION</p>
        </div>
        <h1  className='lg:text-7xl text-4xl bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-800 font-light mt-8 w-[90%] lg:w-[600px]'>Hello From <span className=' bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-900 font-normal'>Farhan </span>,
          Backend Developer.
        </h1>

        <p className=' text-gray-400 mt-[40px] lg:text-xl text-sm w-[80%] lg:w-[500px] ml-1 font-light'>I design and code beautifully simple things, stands on a sweet pot where design and code intersects. Just simple like that!</p>

        <div onClick={()=> keProject()}  className='w-[150px] z-10 lg:flex hidden cursor-pointer hover:shadow-white-aura ease-in transition-all mt-20 lg:mt-44 self-end h-[50px] bg-gradient-to-l from-black via-gray-600 to-black animated-background flex-row items-center justify-evenly border border-white rounded-full '>
          <Image src='/panah.png' alt='panah' width={500} height={500} className='w-[23px] h-[23px]' />
          <h1 className='text-gray-200 text-sm font-light'>My Project</h1>
        </div>

        <div
      className='flex flex-row mt-20 lg:mt-32 lg:ml-0 ml-2 items-center justify-between w-[240px] lg:w-[280px]' >
          <div
           className='flex h-auto gap-3 lg:gap-5 items-center flex-col'>
            <h1 className='text-5xl lg:ml-0 ml-[-15px] lg:text-6xl  text-gray-400'>1.5+</h1>
            <h1 className='w-[100px] text-gray-400'>Year Of Experience</h1>
          </div>
          <div className='flex h-auto gap-3  lg:gap-5 items-center flex-col'>
            <h1 className='text-5xl lg:ml-0 ml-[-30px] lg:text-6xl text-gray-400'>10+</h1>
            <h1 className='w-[100px] text-gray-400'>Project Complete</h1>
          </div>
        </div>
        <div className='flex flex-row justify-evenly border border-white rounded-3xl mt-32 gap-2 items-center w-[110px] p-2'>
          <Image src='/aboutme.png' alt='home' width={500} height={500} className='w-[15px] h-[15px]' />
          <p className='text-white  text-[10px]'>ABOUT ME</p>
        </div>
        
        <h1
        className='lg:text-5xl text-3xl bg-clip-text text-transparent bg-gradient-to-l  via-gray-500 from-black to-gray-200 font-normal mt-8 lg:mt-8'>A flawless experience is built on invisible foundations.</h1>
      <p 
     className='mt-5 text-gray-400 text-[12px] lg:text-[15px] w-[90%] lg:w-[700px]'>I&apos;m a Back-End Engineer with a passion for building robust systems and solving complex problems. Over the past 1.5 years, I&apos;ve had the privilege of working remotely for companies, contributing to startups, and collaborating with skilled teams to develop scalable and efficient digital products. My focus is on crafting seamless server-side logic that powers user experiences. I&apos;m naturally curious, driven by optimization, and always improving my architecture and database management skills to create solutions that stand the test of time. </p>
      <h1
       className='text-gray-300 mt-5 text-xl font-semibold'>My Current Tech Stack :</h1>
      <div
    className='w-[300px] flex flex-row h-max mt-3 items-center gap-4'>
      <Image src='/javascript.svg' className='w-[40px] mr-1 h-[40px]' width={500} height={500} alt='mysql' />
        <Image src='/php.svg' className='w-[50px] h-[50px]' width={500} height={500} alt='mysql' />
        <Image src='/mysql.svg' className='w-[60px] h-[60px]' width={500} height={500} alt='mysql' />
      
      </div>

      <div  id='project'  className='flex flex-row justify-evenly border border-white rounded-3xl mt-32 gap-2 items-center w-[100px] p-2'>
          <Image src='/project.png' alt='home' width={500} height={500} className='w-[15px] h-[15px]' />
          <p className='text-white  text-[10px]'>PROJECT</p>
        </div>
        <h1
       className='text-gray-300 mt-5 lg:mt-8 text-4xl lg:text-5xl font-light'>Featured <span className='bg-clip-text font-normal text-transparent bg-gradient-to-b from-gray-300 to-black'> Project </span></h1>
        <div className='lg:w-[780px] w-[98%] h-[500px] flex gap-6 flex-wrap  mt-5' >
          <div  style={{backgroundImage : "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)),  url('/workwave.jpg')"}} className='lg:w-[90%] w-full flex flex-col justify-end h-[300px] bg-center bg-cover rounded-md mt-2 '>
          <div className='ml-5 w-full gap-2 mb-5 flex flex-row h-auto'>
          <h1 className='p-2 w-[110px] text-center shadow-white-aura  bg-black rounded-3xl font-semibold text-gray-300 border-[2px] border-white text-[12px]'>WorkWave</h1>
          <h1 className='p-2 w-[105px] text-center shadow-white-aura  bg-white rounded-3xl font-semibold border-[2px] border-white text-gray-800 text-[12px]'>Php Native</h1>
          <h1 className='p-2 w-[70px] text-center shadow-white-aura  bg-white rounded-3xl font-semibold  border-[2px] border-white  text-gray-800  text-[12px]'>My Sql</h1></div></div>
          <div
          style={{backgroundImage : "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)),  url('/ayobelajar.jpg')"}} className='bg-white bg-center rounded-md flex flex-col justify-end  bg-cover w-full lg:w-[335px] h-[280px]'>
          <div className='ml-5 w-full gap-2 mb-5 flex flex-row h-auto'>
          <h1 className='p-2 w-[110px] text-center shadow-white-aura  bg-black rounded-3xl font-semibold text-gray-300 border-[2px] border-white text-[12px]'>Ayo Belajar</h1>
          <h1 className='p-2 w-[70px] text-center shadow-white-aura  bg-white rounded-3xl font-semibold border-[2px] border-white text-gray-800 text-[12px]'>Figma</h1></div>
          </div>
          <div
          style={{backgroundImage : "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)),  url('/florismbaru.jpg')"}} className='bg-white bg-center rounded-md flex flex-col justify-end  bg-cover w-full lg:w-[340px] h-[280px]'>
          <div className='ml-5 w-full gap-2 mb-5 flex flex-row h-auto'>
          <h1 className='p-2 w-[80px] text-center shadow-white-aura  bg-black rounded-3xl font-semibold text-gray-300 border-[2px] border-white text-[12px]'>Florism</h1>
          <h1 className='p-2 w-[70px] text-center shadow-white-aura  bg-white rounded-3xl font-semibold border-[2px] border-white text-gray-800 text-[12px]'>Next.js</h1>
          <h1 className='p-2 w-[70px] text-center shadow-white-aura  bg-white rounded-3xl font-semibold border-[2px] border-white text-gray-800 text-[12px]'>Rest-Api</h1></div>
          </div>
        

        </div>
      
      </div>
      
  
      

    </div>
  )
}

export default page