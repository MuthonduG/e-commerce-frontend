'use client'
import React, { useState, useEffect } from 'react'
import { App_Logo } from '@/utils/images_export'
import Image from 'next/image'
import Link from 'next/link'
import { TiThMenuOutline } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";

interface Hyperlinks {
  label: string;
  href: string;
}

const NavHyperlinks: Hyperlinks[] = [
  { label: 'Home', href: '/landing' },
  { label: 'Showroom', href: '/car_show' },
  { label: 'Contact us', href: '/contact' },
  { label: 'About Us', href: '/about' },
]

const Navbar = () => {
  const [isSideNav, setIsSideNav] = useState<boolean>(false)
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

  // Check if we're on the client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Detect screen size changes
  useEffect(() => {
    if (!isClient) return; // Avoid running code until after the initial render

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // Large screens start at 1024px (xl)
    }

    handleResize() // Set initial screen size
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [isClient])

  // Handle sidenav toggle
  const handleSidenavPopup = () => {
    if (!isLargeScreen) {
      setIsSideNav(!isSideNav)
    }
  }

  if (!isClient) {
    return null; // Return null to avoid hydration issues during SSR
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 xl:w-[80%] w-[95%] rounded-full h-[5rem] shadow-xl bg-white flex justify-center items-center p-2 gap-4 z-50 mt-4">
        <div className="flex xl:justify-around justify-between items-center xl:w-[80%] w-full gap-4">
          {/* Logo */}
          <div className="flex justify-center items-center overflow-hidden">
            <Link href={'/landing'}>
              <Image src={App_Logo} alt="App Logo" className="xl:w-[10rem] md:w-[10rem] w-[5rem]" />
            </Link>
          </div>

          {/* Hyperlinks */}
          <div className="grid-cols-4 gap-12 hidden xl:grid">
            {NavHyperlinks.map((link_item, index) => (
              <Link
                href={link_item.href}
                key={index}
                className="flex justify-center items-center transition-transform delay-150 ease-in-out hover:animate-bounce font-semibold hover:text-zinc-500"
              >
                <span>{link_item.label}</span>
              </Link>
            ))}
          </div>

          {/* Enquiry button */}
          <div className="flex justify-center items-center p-2">
            <Link
              href=""
              className="xl:inline-block hidden bg-zinc-700 p-2 px-4 text-slate-200 rounded-xl hover:bg-zinc-900 hover:text-zinc-200 transition delay-75"
            >
              Today&apos;s Offer
            </Link>
            <button
              onClick={handleSidenavPopup}
              type="button"
              className="xl:hidden flex justify-center items-center xl:text-3xl md:text-3xl text-2xl p-2"
            >
              <span>
                <TiThMenuOutline />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidenav */}
      {!isLargeScreen && (
        <section
          className={`mt-28 fixed top-0 left-0 h-screen md:w-[40%] w-[80%] bg-white z-50 transform rounded-r-xl shadow-2xl
            ${isSideNav ? 'translate-x-0' : '-translate-x-full'}
            transition-transform duration-[600ms] ease-in-out p-2`}
        >
          <div className="w-full">
            <div className="flex justify-between p-6 text-xl font-medium">
              <span className="uppercase">Car Fits</span>
              <button
                type="button"
                onClick={handleSidenavPopup}
                className=""
              >
                <GiCancel />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center w-full gap-4">
              {NavHyperlinks.map((link_item, index) => (
                <Link
                  href={link_item.href}
                  key={index}
                  className="flex justify-center items-center p-4 hover:bg-gray-100 hover:text-slate-700 hover:shadow-xl w-full rounded-xl transition-transform duration-[600ms] ease-in-out hover:animate-bounce hover:font-semibold"
                >
                  <span>{link_item.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex justify-center items-center w-full p-4">
              <Link
                href=""
                className="bg-zinc-700 w-full p-2 px-4 text-slate-200 rounded-full hover:bg-zinc-900 hover:text-zinc-200 transition delay-75 flex justify-center items-center shadow-xl mt-24"
              >
                <span>Today&apos;s Offer</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Navbar
