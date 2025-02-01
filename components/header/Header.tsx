import Image from 'next/image'
import React, { ReactNode } from 'react'
import HeaderImage from '@/public/header_one.webp'
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import Link from 'next/link';

type socials = {
  url: string;
  icon: ReactNode;
}

const headerSocials: socials[] = [
  { url: '', icon: <ImFacebook /> },
  { url: '', icon: <GrInstagram /> },
  { url: '', icon: <FaLinkedinIn /> },
  { url: '', icon: <MdMarkEmailUnread /> },
  { url: '', icon: <BsWhatsapp /> },
]

const Header = () => {
  return (
    <section className="absolute top-0 left-0 w-screen h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={HeaderImage} 
          alt="Header Image" 
          fill 
          quality={100} 
          priority={true} 
          className="opacity-80 object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative w-full h-full flex justify-between items-center text-slate-300 md:text-4xl z-10 px-10">
        
        {/* Left Section */}
        <div className="w-[90%] md:w-1/2 xl:w-1/2 flex flex-col justify-center items-start p-6 gap-4 mt-10 md:mt-0 xl:mt-0">
          <div className="font-semibold text-slate-50 text-left text-xl md:text-3xl xl:text-5xl">
            <span>Get A Car That Fits You</span>
          </div>
          <div className="text-xs md:text-sm xl:text-lg text-left leading-8 md:leading-8 xl:leading-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti neque! Dolore quo amet eum voluptates iste ex natus fuga minima quisquam totam sequi commodi corporis animi qui, consectetur voluptas.
            </p>
          </div>
          <div className="text-lg flex justify-end">
            <button type="button" className='bg-slate-100 hover:font-semibold text-slate-900 p-2 px-6 rounded-3xl hover:bg-neutral-400 hover:text-slate-50 mt-4'>Consult Us</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="absolute right-0 bg-rose-500 p-4 text-slate-200 text-center rounded-l-xl shadow-lg flex flex-col justify-center items-center w-fit gap-4 text-xl">
          {
            headerSocials.map((social, index) => (
              <Link href={social.url} key={index} className='hover:text-slate-600 transition-transform delay-200 ease-in-out'>{social.icon}</Link>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Header
