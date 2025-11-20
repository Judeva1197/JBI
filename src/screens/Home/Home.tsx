import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navigationItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT US", href: "#contact" },
];

const services = [
  {
    image: "/untitled--300-x-400-px-.png",
    title: "Pre-purchase Building Inspections",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
  },
  {
    image: "/untitled--300-x-400-px---1-.png",
    title: "Pre-sale Vendor Inspections",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
  },
  {
    image: "/untitled--300-x-400-px---2-.png",
    title: "Dilapidation Reports",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
  },
];

const whyChooseUsFeatures = [
  {
    icon: "/booking.png",
    label: "EASY BOOKING",
  },
  {
    icon: "/license.png",
    label: "LICENSED BUILDER",
  },
  {
    icon: "/report.png",
    label: "DETAILED REPORTING",
  },
  {
    icon: "/back-in-time.png",
    label: "FAST TURNAROUND",
  },
  {
    icon: "/trust.png",
    label: "TRUSTED & PROFESSIONAL",
  },
  {
    icon: "/thermal-imager.png",
    label: "THERMAL IMAGING",
  },
];

const inspectionIncludes = [
  "full Internal & External Inspection",
  "roof Space (where Accessible)",
  "moisture Testing",
  "structural Observations",
  "safety Hazards & Major Defects",
  "photographic Evidenc",
  "same-day Report Option",
];

const pricingCards = [
  {
    title: "UNITS/APARTMENTS (GENERIC)",
    price: "$450",
  },
  {
    title: "UNITS/APARTMENTS (GENERIC)",
    price: "$450",
  },
  {
    title: "UNITS/APARTMENTS (GENERIC)",
    price: "$450",
  },
  {
    title: "UNITS/APARTMENTS (GENERIC)",
    price: "$450",
  },
  {
    title: "UNITS/APARTMENTS (GENERIC)",
    price: "$450",
  },
];

export const Home = (): JSX.Element => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [imageStyle, setImageStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current || !imageContainerRef.current) return;

      const contentRect = contentRef.current.getBoundingClientRect();
      const imageContainerRect = imageContainerRef.current.getBoundingClientRect();

      const stickyTop = 46;
      const stopPoint = contentRect.bottom - imageContainerRect.height - stickyTop;

      if (window.innerWidth >= 1024) {
        if (contentRect.top <= stickyTop && stopPoint > 0) {
          setImageStyle({
            position: "fixed",
            top: `${stickyTop}px`,
            width: imageContainerRect.width,
          });
        } else if (stopPoint <= 0) {
          setImageStyle({
            position: "absolute",
            bottom: "0",
            width: "100%",
          });
        } else {
          setImageStyle({
            position: "relative",
            top: "auto",
            width: "100%",
          });
        }
      } else {
        setImageStyle({});
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white w-full relative overflow-x-hidden">
      <section
        className="relative w-full min-h-[100vh] text-white bg-contain bg-center"
        style={{ backgroundImage: "url('/untitled-design--19--1.png')" }}
      >
        <div className="relative z-10 max-w-full mx-auto px-20 py-12 flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between px-24">
            <img
              className="w-32 h-auto object-contain"
              alt="Element"
              src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-1.png"
            />

            <nav className=" flex flex-wrap items-center justify-center gap-6">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="[font-family:'Inter',Helvetica] font-medium text-black text-sm tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button
              variant="outline"
              className="min-w-[120px] bg-white/10 border border-white text-white text-sm hover:bg-white/20"
            >
              BOOK NOW
            </Button>
          </div>

          <div className="flex flex-col items-center text-center gap-6 py-16  px-2">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-tight max-w-4xl">
              PROFESSIONAL BUILDING INSPECTIONS YOU CAN TRUST
            </h1>

            <p className="[font-family:'Poppins',Helvetica] font-light text-white text-lg sm:text-xl">
              Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
            </p>

            <Button className="w-full max-w-xs sm:max-w-sm bg-white/20 border border-white text-white text-lg hover:bg-white/30">
              BOOK AN INSPECTION
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-4">
          SERVICES WE OFFERED
          </h2>

          <p className="text-center [font-family:'Poppins',Helvetica] font-light text-base sm:text-xl text-[#154060] tracking-[0] leading-[normal] mb-12">
            Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="p-0">
                <img
                  className="w-full h-full object-cover mb-5 rounded-xl"
                  alt={service.title}
                  src={service.image}
                />
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-xl text-center tracking-[0] leading-[normal] mb-4">
                  {service.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-black text-sm text-center tracking-[0] leading-[normal]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="relative w-full py-16 text-white bg-contain bg-center"
        style={{ backgroundImage: "url('/untitled-design--22--1.png')" ,backgroundRepeat:"no-repeat"}}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col gap-12">
          <div className="max-w-xl">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-3xl sm:text-5xl leading-tight mb-6">
              WHY CHOOSE US
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-xl">
              Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-5">
                <img
                  className="w-20 h-20 object-cover"
                  alt={feature.label}
                  src={feature.icon}
                />
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <img
            className="w-full max-w-xl rounded-[32px] object-cover"
            alt="Untitled design"
            src="/untitled-design--24--1.png"
          />

          <div className="flex-1">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-8">
              WHAT&apos;S INCLUDED IN AN INSPECTION
            </h2>

            <ul className="space-y-2">
              {inspectionIncludes.map((item, index) => (
                <li
                  key={index}
                  className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-2xl tracking-[0] leading-[normal]"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4">
  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-start">
    <div ref={contentRef}  className="flex-1 text-center lg:text-right">
      <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12">
        PRE-PURCHASE & PRE-SALE INSPECTIONS
      </h2>

      <div className="grid gap-8">
        {pricingCards.map((card, index) => (
          <Card
            key={index}
            className="relative border-0 shadow-none overflow-hidden bg-transparent"
          >
            <CardContent className="p-6 sm:p-10 bg-[url('/untitled-design--26--2-4.png')] bg-cover bg-center rounded-3xl text-white text-left sm:text-right">
              <h3 className="[font-family:'Poppins',Helvetica] font-normal text-2xl sm:text-[32px] leading-tight mb-4">
                {card.title}
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-base">FROM</p>
              <p className="[font-family:'Poppins',Helvetica] font-bold text-3xl sm:text-[40px]">
                {card.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm sm:text-base tracking-[0] leading-[normal] mt-10">
        *Final price depends on property size, condition and access. Full
        quote confirmed instantly when booking.
      </p>
    </div>

    <div className="w-full lg:w-auto lg:flex-1 lg:self-start relative" style={{ minHeight: '400px' }}>
          <div ref={imageContainerRef} style={imageStyle}>
            <img
              className="w-full max-w-xl rounded-[32px] object-cover "
              alt="Property inspection professional examining a home"
              src="/untitled-design--25--1.png"
            />
          </div>
        </div>

    
  </div>
</section>

      <section className="relative px-4 my-20">
        <div className="relative w-full bg-[#154060] rounded-[32px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full rounded-[32px] object-cover"
            alt="Abbe sublett"
            src="/abbe-sublett-nxzdmuqhn4o-unsplash-1.png"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-6 py-16 sm:py-20">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-3xl sm:text-5xl leading-tight max-w-4xl">
              Reliable Property Assessments Expertise You Can Count On
            </h2>

            <Button className="w-full max-w-xs sm:max-w-sm bg-white/20 border border-white text-white text-base hover:bg-white/30">
              BOOK YOUR INSPECTION
            </Button>

            <p className="[font-family:'Inter',Helvetica] font-light text-white text-sm sm:text-base tracking-[0] leading-[normal]">
              AVAILABLE MONDAY–SATURDAY | LICENSED & INSURED
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#154060] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-6">
          <img
            className="w-56 sm:w-72 h-auto object-contain"
            alt="Element"
            src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-2.png"
          />

          <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-xl">
            • EMAIL: INSPECTIONS@JUDEVA.COM.AU
            <br />• PHONE 0432 800 928
            <br />• BUTTON: &quot;ENQUIRE NOW&quot;
          </p>
        </div>

        <div className="w-full bg-[#011947] flex flex-col sm:flex-row items-center justify-between gap-2 px-6 py-4 text-sm sm:text-base">
          <p className="[font-family:'Inter',Helvetica] font-light text-white tracking-[0] leading-[normal] text-center">
            COPYRIGHT @ JUDEVA PTY LTD
          </p>

          <p className="[font-family:'Inter',Helvetica] font-light text-white tracking-[0] leading-[normal] text-center">
            DESIGN BY WEBASI
          </p>
        </div>
      </footer>
    </div>
  );
};
