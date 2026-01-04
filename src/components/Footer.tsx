import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "BUILDING & FM", href: "/building-management" },
    { label: "CONTACT US", href: "/contact" },
];

const redirectToInspectionForm = () => {
    window.location.href = 'https://formitize.co/Qk6V6-GB';
}

interface FooterProps {
    logoText?: string;
}

export const Footer: React.FC<FooterProps> = ({ logoText }): JSX.Element => {
    const location = useLocation();
    const logoSrc = location.pathname === '/building-management' ? '/logo.png' : '/logoMain.png';

    return (
        <footer className="w-full bg-[#073154] text-white">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    <div className="flex flex-col mt-[-35px]">
                        {logoText ? (
                            <h2 className="text-3xl sm:text-4xl font-bold [font-family:'Inter',Helvetica] text-white tracking-widest mb-5 mt-8 whitespace-nowrap">
                                {logoText}
                            </h2>
                        ) : (
                            <img
                                className="w-56 sm:w-72 h-auto object-contain mb-5"
                                alt="Element"
                                src={logoSrc}
                            />
                        )}
                        <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                            Focus on delivering reliable results, fast turnaround times and professional support—helping you protect your biggest investment with confidence.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-xl mb-2">
                            CONTACT
                        </h3>
                        <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                            EMAIL: eddy@judeva.com.au
                        </p>
                        <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                            PHONE: 0432 800 928
                        </p>
                        <Button onClick={redirectToInspectionForm} className="w-fit mt-2 bg-white/20 border border-white text-white transition-all ease-in-out duration-[360ms] hover:bg-white/30">
                            ENQUIRE NOW
                        </Button>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="[font-family:'Inter',Helvetica] font-semibold text-xl mb-2">
                            NAVIGATION
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm hover:opacity-80 transition-opacity ease-in-out duration-[360ms]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#012D48] flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-4 text-sm sm:text-xs">
                <p className="[font-family:'Inter',Helvetica] font-light text-white tracking-[0] leading-[normal] text-center">
                    COPYRIGHT 2026 @ JUDEVA PVT LTD
                </p>

                <p className="[font-family:'Inter',Helvetica] font-light text-white tracking-[0] leading-[normal] text-center">
                    DESIGN BY <a href="https://webasi.co/" className="text-cyan-500"> WEBASI </a>
                </p>
            </div>
        </footer>
    );
};
