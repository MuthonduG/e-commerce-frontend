"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouting = () => {
      router.push('./pages/landing');
    };

    if (document.readyState === 'complete') {
      handleRouting();
    } else {
      setIsLoading(true);
      window.addEventListener('load', handleRouting);
    }

    return () => {
      window.removeEventListener('load', handleRouting);
    };
  }, [router]);

  useEffect(() => {
    if (isLoading) {
      gsap.to(".loading", {
        rotation: 360,
        x: '100vw',
        xPercent: -100,
        duration: 10,
        repeat: 2,
        yoyo: true,
      });
    }
  }, [isLoading]); 

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading && (
        <div className="loading w-[20rem] h-[20rem] rounded-full bg-blue-500">
          {/* Add any content inside the loading animation if needed */}
        </div>
      )}
    </div>
  );
}