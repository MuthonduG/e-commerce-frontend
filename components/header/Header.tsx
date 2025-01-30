import Image from 'next/image'
import React, { ReactNode } from 'react'
import HeaderImag from '@/public/header_one.webp'
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';

type socials = {
  url: string;
  icon: ReactNode;
}

const headerSocials: socials[] = [
  { url: '', icon: <SlSocialFacebook /> },
  { url: '', icon: <FaInstagram /> },
  { url: '', icon: <FaLinkedinIn /> },
  { url: '', icon: <MdOutlineEmail /> },
]

const Header = () => {
  return (
    <section className="absolute top-0 left-0 w-screen h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={HeaderImag} 
          alt="Header Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          priority={true} 
          className="opacity-80"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative w-full h-full flex justify-between items-center text-slate-300 md:text-4xl z-10 px-10">
        
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center items-start p-6 gap-4">
          <div className="font-semibold text-slate-50 text-left text-3xl xl:text-5xl">
            <span>Get A Car That Fits You</span>
          </div>
          <div className="text-sm xl:text-lg text-left leading-8 xl:leading-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, corrupti neque! Dolore quo amet eum voluptates iste ex natus fuga minima quisquam totam sequi commodi corporis animi qui, consectetur voluptas.
            </p>
          </div>
          <div className="text-lg flex justify-end">
            <button type="button" className='bg-slate-200 text-slate-900 p-2 px-6 rounded-3xl hover:bg-neutral-400 hover:text-slate-200 mt-4'>Consult Us</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="absolute right-0 bg-rose-500 p-4 text-slate-100 text-center rounded-l-xl shadow-lg flex flex-col justify-center items-center w-fit gap-4 text-xl">
          {
            headerSocials.map((social, index) => (
              <Link href={social.url} key={index}>{social.icon}</Link>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Header
