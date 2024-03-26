import React from 'react'

import satu from "@/public/gambar1.png"
import dua from "@/public/gambar2.png"
import tiga from "@/public/gambar3.png"
import Image from 'next/image'

const data = [
    {
        id: 1, 
        title: "Tubes Daspro",
        src: satu,
    },

    {
        id: 2, 
        title: "Milestone S Word",
        src: dua,
    },

    {
        id: 3, 
        title: "Tubes Pengkom",
        src: tiga,
    }
]

const MyWorks = () => {
  return (
    <div id= "myworks" className='p-20 space-y-10 flex flex-col items-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'>
        <h1 className='font-bold text-4xl'>
            My Works
        </h1>
        <div className='grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                data.map((item) => {
                    return (
                        <div key={item.id} className='shadow-md text-black bg-white/50 max-w-[300px] rounded-md'>
                            <div className='rounded-t-md overflow-hidden'>
                                <Image
                                    src = {item.src}
                                    width = {300}
                                    height = {300}
                                />
                            </div>
                            <p className='p-2.5 text-center font-semibold'>
                                {item.title}
                            </p>
                            
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default MyWorks
