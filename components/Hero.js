import Image from "next/image";
import orang from "@/public/orang.svg"

const Hero = () => {
    return (
        <div className="w-full pt-20 h-[625px] md:h-[500px] bg-gradient-to-br from-cyan-100 via-pink-100 to-green-100  flex flex-col md:flex-row items-center justify-between p-12 overflow-y-hidden text-center md:text-left ">
            <div className="flex flex-col gap-6">
                <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-pink-400 to-purple-400 font-extrabold text-4xl">
                    Hi, I'm Allen
                </h1>
                <p className="max-w-[500px]">
                    To be a Software Engineer is so amazing career, I can help everyone build their business, it such happiness for me.
                </p>
                <div className="flex flex-col gap-8">
                    <p>
                        So, let me help you!
                    </p>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <button className="bg-black text-white py-1 px-4 rounded-md"> Hire Me</button>
                        <button className="border-2 border-black text-black py-1 px-4 rounded-md"> Download CV</button>
                    </div>
                </div>
            </div>
            <div>
                <Image 
                    src={orang}
                    width={650}
                    height={650}
                />
            </div>
        </div>
    )
}

export default Hero;