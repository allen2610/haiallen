import React from 'react'
import ig from '@/public/Instagram.svg'
import li from '@/public/LinkedIn.svg'
import twt from '@/public/TwitterX.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className=' text-white py-10 w-full bg-black/85 flex flex-col items-center gap-8'>
      <h1 className='font-extrabold text-3xl'>
        Allen.
      </h1>
      <div className='w-full flex gap-5 justify-center font-semibold'>
        <a href='/'>Home</a>
        <a href='#about'>About</a>
        <a href='#myworks'>My Works</a>
      </div>
      <div className='w-full flex justify-center gap-6'>
        <a>
            <Image
                src = {li}
                width = {24}
                heigth = {24}
            />
        </a>
        <a>
            <Image
                src = {ig}
                width = {24}
                heigth = {24}
            />
        </a>
        <a>
            <Image
                src = {twt}
                width = {24}
                heigth = {24}
            />
        </a>
      </div>
    </div>
  )
}

export default Footer
