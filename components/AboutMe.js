import React from 'react'
import peace from "@/public/peace.svg"
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div id= "about" className='w-full my-36 flex items-center justify-center'>
        <div className='p-16 rounded-xl bg-[#F5EEE6] flex flex-col gap-5 max-w-[800px]'>
            <h2 className='font-bold text-xl text-[#E6A4B4]'>
                About Me
            </h2>
            <h3>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            </h3>
            <div>
                <Image className='hidden lg:block absolute translate-y-[-400px] translate-x-[-300px]'
                    src = {peace}
                    width = {500}
                    height = {500}
                />
            </div>
        </div>
    </div>
      
  )
}

export default AboutMe
