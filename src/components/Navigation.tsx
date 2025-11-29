import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

interface NavigationProps {
  logoSrc?: string;
  textColor?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  
  logoSrc = "/2381e0f2-52ae-4253-81da-16c35dfc62c3-1.png",
  textColor = "text-red",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const redirectToInspectionForm = () => {
    window.location.href = 'https://formitize.co/Qk6V6-GB';
  }

   
  return (
    <>
      {/* Desktop Navigation - Original Layout */}
    <div className="hidden lg:flex flex-wrap items-center justify-between px-40 py-1">
        {/* Logo */}
        <img
          className="w-32 h-auto object-contain"
          alt="Logo"
          src={logoSrc}
        />

        {/* Desktop Navigation Menu */}
        <nav className="flex flex-wrap items-center justify-center gap-6 pb-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:text-[#154060] hover:tracking-wide transition-opacity ease-in-out duration-[360ms]`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Book Now Button */}
        <Button onClick={redirectToInspectionForm}  className="min-w-[120px] bg-white/10 border border-white text-white text-sm transition-all ease-in-out duration-[360ms] hover:bg-white/30">
          BOOK NOW
        </Button>
    </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden flex-wrap items-center justify-between px-4 sm:px-6 py-1">
        {/* Mobile Logo */}
        <img
          className="w-24 sm:w-28 h-auto object-contain"
          alt="Logo"
          src={logoSrc}
        />

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Off-Canvas Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          />

          {/* Off-Canvas Menu */}
          <div className="fixed right-0 top-0 h-full w-64 bg-[#154060] shadow-lg z-50 lg:hidden transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2"
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 mb-0" />
              <span className="block w-6 h-0.5 bg-white -rotate-45" />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6 p-8 pt-16">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={closeMenu}
                  className="[font-family:'Inter',Helvetica] font-medium text-white text-lg hover:text-cyan-500 transition-colors ease-in-out duration-[360ms]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Book Now Button */}
            <div className="px-8 pb-8">
              <Button className="w-full bg-white/20 border border-white text-white transition-all ease-in-out duration-[360ms] hover:bg-white/30">
                BOOK NOW
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
