import React from 'react'
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden m-0 p-0">
      {/* Background Image */}
      <img
        src={assets.hero_img}
        alt="hero-image"
        className="w-full h-full object-cover block"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 z-10 pointer-events-none">
        <h1 className="text-white text-[30px] tracking-[8px] mb-[30px] text-center font-['Franklin_Gothic_Medium'] font-[200] leading-[1.2]">
          OWN YOUR NEW LOOK
        </h1>

        <div className="flex gap-5 pointer-events-auto">
          <button
            onClick={() => navigate('/collection?type=Unstitched')}
            className="w-[200px] h-[55px] border-2 border-white bg-transparent text-white text-[16px] tracking-[2px] cursor-pointer relative overflow-hidden transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white before:transition-all before:duration-300 before:z-[-1] hover:before:left-0"
          >
            UNSTITCHED
          </button>
          <button
            onClick={() => navigate('/collection?type=Stitched')}
            className="w-[200px] h-[55px] border-2 border-white bg-transparent text-white text-[16px] tracking-[2px] cursor-pointer relative overflow-hidden transition-all duration-300 hover:text-black hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white before:transition-all before:duration-300 before:z-[-1] hover:before:left-0"
          >
            STITCHED
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero