import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import GlareHover from "../../components/ReactBit/GlareHoverEffect";
import { Inspection } from "../../components/Inspection";
import { Navigation } from "../../components/Navigation";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BUILDING & FM", href: "/building-management" },
  { label: "CONTACT US", href: "/contact" },
];

export const Home = (): JSX.Element => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const inspectionFormRef = useRef<HTMLDivElement | null>(null);
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const scrollToInspectionForm = () => {
    if (inspectionFormRef.current) {
      inspectionFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !imageContainerRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const imageContainerRect = imageContainerRef.current.getBoundingClientRect();
      const sectionElement = contentRef.current.parentElement;
      if (!sectionElement) return;

      const sectionRect = sectionElement.getBoundingClientRect();
      const stickyTop = 96; // 24 * 4 = 96px (top-24 equivalent)
      const imageHeight = imageContainerRect.height;

      // Calculate when image should stop being sticky
      // When section bottom reaches the point where image would naturally end
      // This happens when: sectionBottom <= imageHeight + stickyTop
      const sectionBottom = sectionRect.bottom;
      const stopStickyPoint = imageHeight + stickyTop;

      if (window.innerWidth >= 1024) {
        // lg breakpoint
        // Start being sticky when content top reaches stickyTop
        // Stop being sticky when section bottom reaches or passes stopStickyPoint
        const shouldBeSticky = contentRect.top <= stickyTop && sectionBottom > stopStickyPoint;

        if (shouldBeSticky) {
          // Sticky position - image stays fixed while content scrolls
          setImageStyle({
            position: "fixed",
            top: `${stickyTop}px`,
            width: imageContainerRect.width,
            left: imageContainerRect.left,
          });
        } else {
          // End reached or not yet sticky - image scrolls with content
          setImageStyle({
            position: "relative",
            top: "auto",
            width: "100%",
            left: "auto",
          });
        }
      } else {
        // Mobile - no sticky behavior
        setImageStyle({});
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      handleScroll();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white w-full relative overflow-x-hidden scroll-smooth">
      <section
        className="relative w-full min-h-[10vh] xl:min-h-[100vh] text-white bg-cover lg:bg-cover bg-center"
        style={{ backgroundRepeat: "no-repeat", backgroundImage: `url('${isMobile ? '/aboutusbg.jpg' : '/funtitled-design--19--1.png'}')` }}
      >
        <div className="relative z-10 max-w-full mx-auto pb-12 flex flex-col gap-10">
          <Navigation textColor="text-black" />

          <div className="flex flex-col items-center text-center gap-6 py-16  px-2">
            <h1
              className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[84px] leading-tight max-w-5xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              PROFESSIONAL BUILDING INSPECTIONS YOU CAN TRUST
            </h1>

            <p className="[font-family:'Poppins',Helvetica] font-light text-white text-lg sm:text-sm" data-aos="fade-up" data-aos-duration="1000">
              Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
            </p>

            <Button data-aos="fade-up" data-aos-duration="1500" onClick={scrollToInspectionForm} className="w-fit p-6 max-w-xs sm:max-w-sm bg-white/20 border border-white text-white text-lg transition-all ease-in-out duration-[360ms] hover:bg-white/30">
              BOOK AN INSPECTION
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-6 lg:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-4"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            SERVICES WE OFFER
          </h2>

          <p data-aos="fade-up" data-aos-duration="1000" className="text-center [font-family:'Poppins',Helvetica] font-light text-base sm:text-sm text-[#154060] tracking-[0] leading-[normal] mb-12">
            Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card data-aos="fade-up" data-aos-easing="linear" data-aos-duration="0" className="border-0 shadow-none">
            <CardContent className="p-0">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-full h-full object-cover mb-5"
                  alt="Pre-purchase Building Inspections"
                  src="/untitled--300-x-400-px-.png"
                />
              </GlareHover>
              <h3
                className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-xl text-center tracking-[0] leading-[normal] mb-4"

              >
                Pre-purchase Building Inspections
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-light text-black text-sm text-center tracking-[0] leading-[normal]">
                A pre-purchase building inspection provides a detailed assessment of the property’s structural integrity and overall safety before you buy.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="border-0 shadow-none">
            <CardContent className="p-0">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-full h-full object-cover mb-5"
                  alt="Pre-sale Vendor Inspections"
                  src="/untitled--300-x-400-px---1-.png"
                />
              </GlareHover>
              <h3
                className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-xl text-center tracking-[0] leading-[normal] mb-4"

              >
                Pre-sale Vendor Inspections
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-light text-black text-sm text-center tracking-[0] leading-[normal]">
                A pre-sale vendor inspection thoroughly assesses the structural integrity, safety, and functionality of your property before it goes to market.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className="border-0 shadow-none">
            <CardContent className="p-0">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-full h-full object-cover mb-5"
                  alt="Dilapidation Reports"
                  src="/untitled--300-x-400-px---2-.png"
                />
              </GlareHover>
              <h3
                className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-xl text-center tracking-[0] leading-[normal] mb-4"

              >
                Dilapidation Reports
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-light text-black text-sm text-center tracking-[0] leading-[normal]">
                A dilapidation report documents the current condition of a property and its surrounding structures before construction or excavation work begins.
              </p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000" className="border-0 shadow-none">
            <CardContent className="p-0">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-full h-full object-cover mb-5"
                  alt="Water Ingress & Leak Detection Inspection"
                  src="/LeakDetection.png"
                />
              </GlareHover>
              <h3
                className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-xl text-center tracking-[0] leading-[normal] mb-4"

              >
                Water Ingress & Leak Detection Inspection
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-light text-black text-sm text-center tracking-[0] leading-[normal]">
                Our Water Ingress Inspection identifies the exact source of leaks and moisture issues using a combination of thermal imaging, moisture detection and optional dye-testing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section
        className="relative w-full  py-16 text-white bg-cover lg:bg-center min-h-[10vh] lg:min-h-[10vh]"
        style={{ backgroundImage: "url('/untitled-design--22--1.png')", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col gap-12">
          <div className="max-w-full flex justify-center items-center flex-col">
            <h2
              className="[font-family:'Inter',Helvetica] font-semibold text-3xl sm:text-5xl text-center leading-tight mb-6"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              WHY CHOOSE US
            </h2>

            <p data-aos="fade-up" data-aos-duration="1000" className="[font-family:'Poppins',Helvetica] font-light text-center text-base sm:text-sm">
              Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="flex flex-col items-center text-center gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-20 h-20 object-cover"
                  alt="EASY BOOKING"
                  src="/booking.png"
                />
              </GlareHover>
              <p className="capitalize [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                Easy Booking
              </p>
            </div>

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="flex flex-col items-center text-center gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-20 h-20 object-cover"
                  alt="LICENSED BUILDER"
                  src="/license.png"
                />
              </GlareHover>
              <p className="capitalize [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">

                Licensed Builder
              </p>
            </div>

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="flex flex-col items-center text-center gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-20 h-20 object-cover"
                  alt="DETAILED REPORTING"
                  src="/report.png"
                />
              </GlareHover>
              <p className="capitalize [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">

                Detailed Reporting
              </p>
            </div>

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="flex flex-col items-center text-center gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-20 h-20 object-cover"
                  alt="FAST TURNAROUND"
                  src="/back-in-time.png"
                />
              </GlareHover>
              <p className="capitalize [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">

                Fast Turnaround
              </p>
            </div>

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="flex flex-col items-center text-center gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-20 h-20 object-cover"
                  alt="TRUSTED & PROFESSIONAL"
                  src="/trust.png"
                />
              </GlareHover>
              <p className="capitalize [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">

                Trusted & Professional
              </p>
            </div>

            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="flex flex-col items-center text-center gap-5">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-20 h-20 object-cover"
                  alt="THERMAL IMAGING"
                  src="/thermal-imager.png"
                />
              </GlareHover>
              <p className="capitalize [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">

                Thermal Imaging
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className=""
          >
            <img
              className="w-full max-w-xl rounded-[32px] object-cover"
              alt="Untitled design"
              src="/untitled-design--24--1.png"
            />

          </GlareHover>

          <div className="flex-1">
            <h2
              className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-8"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              WHAT&apos;S INCLUDED IN AN INSPECTION
            </h2>

            <ul className="space-y-2">
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Full Internal & External Inspection
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="600"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Roof Space (where Accessible)
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="700"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Moisture Testing
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="800"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Structural Observations
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="900"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Safety Hazards & Major Defects
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Photographic Evidence
              </li>
              <li
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1100"
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl tracking-[0] leading-[normal]"
              >
                • Same-day Report Option
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-6 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-start">
          <div ref={contentRef} className="flex-1 text-center lg:text-right">
            <h2
              className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              PRE-PURCHASE & PRE-SALE INSPECTIONS
            </h2>

            <div className="grid gap-8">
              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-12 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    UNITS/APARTMENTS (GENERIC)
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $450
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-12 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    Townhouses
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $500
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-12 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    Houses (small)
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $550
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-12 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    Houses (medium–large)
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $600
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>
                </CardContent>
              </Card>



              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-14 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    Thermal Imaging & Moisture Detection
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $700
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>

                  <div className="mb-4 text-left">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white mb-2">Includes:</p>
                    <ul className="[font-family:'Poppins',Helvetica] font-light text-sm text-white list-disc pl-5 space-y-1">
                      <li>Thermal imaging</li>
                      <li>Moisture detection</li>
                      <li>Moisture mapping</li>
                      <li>Full written report with photos</li>
                    </ul>
                  </div>

                  <div className="mt-2 border-t border-white/20 pt-4 text-left">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white mb-3">Premium Add-Ons (Choose One):</p>
                    <ul className="[font-family:'Poppins',Helvetica] font-light text-sm text-white list-disc pl-5 space-y-1 mb-4">
                      <li>Thermal Scan & Moisture Detection – $120 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></li>
                      <li>Urgent Same-Day Visit & Report – $120 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></li>
                      <li>Urgent Same-Day Report – $50 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></li>
                      <li>Roof Void Scan – $80 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></li>
                    </ul>

                    <div className="border-t border-white/20 pt-3 mt-3">
                      <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white mb-1">Premium Bundle</p>
                      <p className="[font-family:'Poppins',Helvetica] font-light text-xs text-white">Get all add-ons combined for the most detailed and efficient inspection.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm sm:text-base tracking-[0] leading-[normal] mt-10">
              *Final price depends on property size, condition and access. Full
              quote confirmed instantly when booking.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:flex-1 lg:self-start relative">
            <div ref={imageContainerRef} style={imageStyle}>

              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className=""
              >
                <img
                  className="w-full max-w-xl rounded-[32px] object-cover"
                  alt="Untitled design"
                  src="/untitled-design--25--1.png"
                />

              </GlareHover>
            </div>
          </div>
        </div>
      </section>

      {/* Water Ingress & Dilapidation Sections (new) */}
      <section className="relative py-6 lg:py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1">
            <h2
              className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-8"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              WATER INGRESS & LEAK DETECTION
            </h2>

            <div className="grid gap-8 max-w-xl">
              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-12 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    Water Ingress & Leak Detection Inspection
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $700
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>

                  <div className="mb-4 text-left">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white mb-2">Includes:</p>
                    <ul className="[font-family:'Poppins',Helvetica] font-light text-sm text-white list-disc pl-5 space-y-1">
                      <li>Thermal imaging</li>
                      <li>Moisture detection</li>
                      <li>Moisture mapping</li>
                      <li>Full written report with photos</li>
                    </ul>
                  </div>

                  <div className="mt-2 border-t border-white/20 pt-4 text-left">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white">Add-ons:</p>
                    <p className="[font-family:'Poppins',Helvetica] font-light text-sm text-white">Dye Testing: + $150 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></p>
                    <p className="[font-family:'Poppins',Helvetica] font-light text-sm text-white mt-2">Urgent same-day visit: + $150 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>

          <div className="flex-1 lg:flex-1 lg:sticky lg:top-24">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className=""
            >
              <img
                className="w-full max-w-xl rounded-[32px] object-cover shadow-xl"
                alt="Water Ingress & Leak Detection"
                src="WaterIngress.png"
                data-aos="fade-left"
                data-aos-duration="700"
              />
            </GlareHover>
          </div>
        </div>
      </section>

      <section className="relative py-6 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1 lg:flex-1 lg:order-2 lg:self-start">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              className=""
            >
              <img
                className="w-full max-w-xl rounded-[32px] object-cover shadow-xl"
                alt="Dilapidation Reports"
                src="/DilapidationReports.png"
                data-aos="fade-right"
                data-aos-duration="700"
              />
            </GlareHover>
          </div>

          <div className="flex-1 lg:order-1">
            <h2
              className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-8"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              DILAPIDATION REPORTS
            </h2>

            <div className="grid gap-8 max-w-xl">
              <Card className="relative border-0 shadow-none overflow-hidden bg-transparent group cursor-pointer">
                <CardContent className="p-12 lg:p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
                  <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4 ">
                    Dilapidation Reporting
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-base ">FROM</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px] transition-colors duration-[360ms] ease-in-out group-hover:text-cyan-500">
                      $650
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-xs" style={{ fontSize: '9px' }}>
                      + GST
                    </p>
                  </div>

                  <div className="mb-4 text-left">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white mb-2">Includes:</p>
                    <ul className="[font-family:'Poppins',Helvetica] font-light text-sm text-white list-disc pl-5 space-y-1">
                      <li>Photographic and written condition reporting</li>
                      <li>Pre- and post-construction comparisons</li>
                      <li>Detailed site notes</li>
                    </ul>
                  </div>

                  <div className="mt-2 border-t border-white/20 pt-4 text-left">
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-sm text-white">Add-on:</p>
                    <p className="[font-family:'Poppins',Helvetica] font-light text-sm text-white">Re-attendance fee post build: + $250 <span className="text-xs" style={{ fontSize: '9px' }}>+ GST</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection form (inserted before CTA) */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <Inspection ref={inspectionFormRef} />
        </div>
      </section>

      <section className="relative px-6 lg:px-20 my-20">
        <div className="relative w-full bg-[#154060] rounded-[15px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full rounded-[32px] object-cover"
            alt="Abbe sublett"
            src="/abbe-sublett-nxzdmuqhn4o-unsplash-1.png"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-6 py-16 sm:py-20">
            <h2
              className="[font-family:'Inter',Helvetica] font-medium text-white text-3xl sm:text-5xl uppercase max-w-3xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Reliable Property Assessments & Expertise You Can Count On
            </h2>

            <Button data-aos="fade-up" data-aos-duration="500" onClick={scrollToInspectionForm} className="w-fit p-6 max-w-xs sm:max-w-sm bg-white/20 border border-white text-white text-lg transition-all ease-in-out duration-[360ms] hover:bg-white/30">
              BOOK AN INSPECTION
            </Button>

            <p data-aos="fade-up" data-aos-duration="1000" className="[font-family:'Inter',Helvetica] font-light text-white text-sm sm:text-sm tracking-[0] leading-[normal]">
              AVAILABLE MONDAY–SATURDAY | LICENSED & INSURED
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#154060] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

            <div className="flex flex-col mt-[-35px]">
              <img
                className="w-56 sm:w-72 h-auto object-contain "
                alt="Element"
                src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-2.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm" >Focus on delivering reliable results, fast turnaround times and professional support—helping you protect your biggest investment with confidence.</p>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-4">
              <h3
                className="[font-family:'Inter',Helvetica] font-semibold text-xl mb-2"

              >
                CONTACT
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                EMAIL: INSPECTIONS@JUDEVA.COM.AU
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                PHONE: 0432 800 928
              </p>
              <Button className="w-fit mt-2 bg-white/20 border border-white text-white transition-all ease-in-out duration-[360ms] hover:bg-white/30">
                ENQUIRE NOW
              </Button>
            </div>

            {/* Navigation Column */}
            <div className="flex flex-col gap-4">
              <h3
                className="[font-family:'Inter',Helvetica] font-semibold text-xl mb-2"

              >
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
            COPYRIGHT @ JUDEVA PTY LTD
          </p>

          <p className="[font-family:'Inter',Helvetica] font-light text-white tracking-[0] leading-[normal] text-center">
            DESIGN BY <a href="https://webasi.co/" className="text-cyan-500"> WEBASI </a>
          </p>
        </div>
      </footer>
    </div>
  );
};