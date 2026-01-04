import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BUILDING & FACILITIES MANAGEMENT", href: "/building-management" },
  { label: "CONTACT US", href: "/contact" },
];

interface NavigationProps {
  logoSrc?: string;
  logoText?: string;
  textColor?: string;
}

export const Navigation: React.FC<NavigationProps> = ({

  logoSrc = "/logoMain.png",
  logoText,
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
      {/* Desktop Navigation - Solid Blue Fixed */}
      <div className="hidden lg:flex flex-wrap items-center justify-between px-10 xl:px-40 h-[80px] bg-[#073154] border-b border-white/10 fixed top-0 left-0 right-0 w-full z-50" style={{ zIndex: "100000" }}>
        {/* Logo */}
        <Link to="/">
          {logoText ? (
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-2xl tracking-tight cursor-pointer whitespace-nowrap">
              {logoText}
            </h1>
          ) : (
            <img
              className="w-32 h-auto object-contain cursor-pointer"
              alt="Logo"
              src={logoSrc}
            />
          )}
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`relative [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:tracking-wide transition-all ease-in-out duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Book Now Button */}
        <Button onClick={redirectToInspectionForm} className="min-w-[120px] bg-white/10 border border-white text-white text-sm transition-all ease-in-out duration-[360ms] hover:bg-white/30">
          BOOK NOW
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-[#367c9c] border-b border-white/10 fixed top-0 left-0 right-0 w-full z-50 min-h-[70px]">
        {/* Mobile Logo */}
        <Link to="/">
          {logoText ? (
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-tight cursor-pointer whitespace-nowrap">
              {logoText}
            </h1>
          ) : (
            <img
              className="w-24 sm:w-28 h-auto object-contain cursor-pointer"
              alt="Logo"
              src={logoSrc}
            />
          )}
        </Link>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col items-center justify-center gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
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
          <div className="fixed right-0 top-0 h-full w-64 bg-[#154060] shadow-lg z-[60] lg:hidden transition-transform duration-300 ease-in-out">
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
      <div className="h-[70px] lg:h-[100px] w-full bg-transparent"></div>
    </>
  );
};
