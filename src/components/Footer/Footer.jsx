import React from 'react';
import HeroImg from '../../Images/Hero_Img.avif'; // same background image

function Footer() {
  return (
    <footer className="relative w-full text-white py-10">
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Footer Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-10" />

      {/* Footer Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Muhammad Muddassir</h2>
        <p className="text-sm md:text-base opacity-80">
          Frontend & MERN Stack Developer | Passionate about building clean and scalable web apps.
        </p>

        <div className="text-sm opacity-60 pt-4 border-t border-white/20 w-full max-w-md">
          © {new Date().getFullYear()} Muddassir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
