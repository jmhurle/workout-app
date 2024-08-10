import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[95%] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>IT'S TIME TO</p>
            <h1 className='uppercase font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>WORK<span className='text-blue-400 font-xl'>OUT</span></h1>
        </div>
        <p className='text-2xl md:text-xl font-light'>I hereby acknowledge that I am having a <span className='text-blue-400 font-medium'>fantastic time</span> using this app and am going to continue actually using it forever and ever.</p>
        <Button func={() => {window.location.href = '#generate'}} text={'Accept & Begin'} />
    </div>
  )
}
