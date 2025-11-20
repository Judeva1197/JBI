import React from "react";
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
  return (
    <div className="bg-white w-full min-w-[1440px] relative">
      <section className="relative w-full h-[810px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Untitled design"
          src="/untitled-design--19--1.png"
        />

        <img
          className="absolute top-0 left-0 w-[287px] h-[148px] object-cover z-10"
          alt="Element"
          src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-1.png"
        />

        <nav className="absolute top-[54px] left-[580px] flex gap-9 z-10">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-sm text-center tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="outline"
          className="absolute top-[54px] left-[1248px] w-[105px] h-[31px] bg-[#ffffff14] rounded-[1px] border border-solid border-white text-white text-sm hover:bg-white/20 z-10"
        >
          BOOK NOW
        </Button>

        <h1 className="absolute top-[252px] left-[calc(50%_-_433px)] w-[866px] [font-family:'Inter',Helvetica] font-bold text-white text-[70px] text-center tracking-[0] leading-[normal] z-10">
          PROFESSIONAL BUILDING INSPECTIONS YOU CAN TRUST
        </h1>

        <p className="absolute top-[536px] left-[321px] [font-family:'Poppins',Helvetica] font-light text-white text-2xl text-center tracking-[0] leading-[normal] z-10">
          Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
        </p>

        <Button className="absolute top-[601px] left-[575px] w-[291px] h-[57px] bg-[#d9d9d926] border border-solid border-[#d9d9d9] text-white text-xl hover:bg-[#d9d9d940] z-10">
          BOOK AN INSPECTION
        </Button>
      </section>

      <section className="relative py-16">
        <h2 className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-5xl tracking-[0] leading-[normal] mb-2">
          SERVICES WE OFFERED
        </h2>

        <p className="text-center [font-family:'Poppins',Helvetica] font-light text-2xl text-[#154060] tracking-[0] leading-[normal] mb-16">
          Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
        </p>

        <div className="flex justify-center gap-10 px-[230px]">
          {services.map((service, index) => (
            <Card key={index} className="w-[300px] border-0 shadow-none">
              <CardContent className="p-0">
                <img
                  className="w-full h-[400px] object-cover mb-5"
                  alt={service.title}
                  src={service.image}
                />
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-xl text-center tracking-[0] leading-[normal] mb-4">
                  {service.title}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-light text-black text-xs text-center tracking-[0] leading-[normal]">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative w-full h-[810px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Untitled design"
          src="/untitled-design--22--1.png"
        />

        <div className="absolute top-[179px] left-[115px] z-10">
          <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[normal] mb-12">
            WHY CHOOSE US
          </h2>

          <p className="w-[415px] [font-family:'Poppins',Helvetica] font-light text-2xl text-white tracking-[0] leading-[normal]">
            Sydney-wide | Licensed Builder | Detailed Reports | Fast Turnaround
          </p>
        </div>

        <div className="absolute top-[53px] right-[149px] grid grid-cols-3 gap-x-[75px] gap-y-[84px] z-10">
          {whyChooseUsFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <img
                className="w-[97px] h-[97px] object-cover"
                alt={feature.label}
                src={feature.icon}
              />
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20">
        <div className="flex gap-[55px] px-[46px]">
          <img
            className="w-[686px] h-[686px] rounded-[32px] object-cover"
            alt="Untitled design"
            src="/untitled-design--24--1.png"
          />

          <div className="flex-1 pt-[81px]">
            <h2 className="w-[642px] [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-5xl tracking-[0] leading-[normal] mb-16">
              WHAT&apos;S INCLUDED IN AN INSPECTION
            </h2>

            <ul className="space-y-[46px]">
              {inspectionIncludes.map((item, index) => (
                <li
                  key={index}
                  className="[font-family:'Poppins',Helvetica] font-light text-black text-2xl tracking-[0] leading-[normal]"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="flex gap-[14px] px-px">
          <div className="flex-1 pt-[49px] pr-[145px] text-right">
            <h2 className="w-[642px] ml-auto [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-5xl tracking-[0] leading-[normal] mb-[137px]">
              PRE-PURCHASE & PRE-SALE INSPECTIONS
            </h2>

            <div className="space-y-[216px]">
              {pricingCards.map((card, index) => (
                <Card
                  key={index}
                  className="relative w-[491px] h-[195px] ml-auto border-0 shadow-none overflow-hidden"
                >
                  <CardContent className="p-0 relative">
                    <img
                      className="absolute top-0 left-0.5 w-[483px] h-[195px] object-cover"
                      alt="Untitled design"
                      src="/untitled-design--26--2-4.png"
                    />
                    <div className="relative z-10">
                      <h3 className="absolute top-[33px] left-0 w-[459px] [font-family:'Poppins',Helvetica] font-normal text-white text-[32px] text-right tracking-[0] leading-[normal]">
                        {card.title}
                      </h3>
                      <p className="absolute top-[150px] left-[292px] [font-family:'Poppins',Helvetica] font-normal text-white text-base text-right tracking-[0] leading-[normal]">
                        FROM
                      </p>
                      <p className="absolute top-[124px] left-[353px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] text-right tracking-[0] leading-[normal]">
                        {card.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="w-[686px] ml-auto mt-[312px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              *final Price Depends On Property Size, Condition And Access. Full
              Quote Confirmed Instantly When Booking.
            </p>
          </div>

          <img
            className="w-[686px] h-[686px] rounded-[32px] object-cover"
            alt="Untitled design"
            src="/untitled-design--25--1.png"
          />
        </div>
      </section>

      <section className="relative mx-[72px] my-20">
        <div className="relative w-full h-[428px] bg-[#154060] rounded-[32px] overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full rounded-[32px] object-cover"
            alt="Abbe sublett"
            src="/abbe-sublett-nxzdmuqhn4o-unsplash-1.png"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-[161px]">
            <h2 className="w-[974px] [font-family:'Inter',Helvetica] font-medium text-white text-5xl text-center tracking-[0] leading-[normal] mb-[33px]">
              Reliable Property Assessments Expertise You Can Count On
            </h2>

            <Button className="w-[257px] h-[61px] bg-[#ffffff29] border border-solid border-white text-white text-base hover:bg-[#ffffff40] mb-[27px]">
              BOOK YOUR INSPECTION
            </Button>

            <p className="[font-family:'Inter',Helvetica] font-light text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
              AVAILABLE MONDAY–SATURDAY | LICENSED & INSURED
            </p>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#154060]">
        <div className="px-[72px] py-[112px]">
          <img
            className="w-[371px] h-[148px] object-cover mb-[22px]"
            alt="Element"
            src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-2.png"
          />

          <div className="absolute top-[5429px] left-[940px]">
            <p className="[font-family:'Poppins',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
              • EMAIL: INSPECTIONS@JUDEVA.COM.AU
              <br />• PHONE 0432 800 928
              <br />• BUTTON: &quot;ENQUIRE NOW&quot;
            </p>
          </div>
        </div>

        <div className="w-full h-[60px] bg-[#011947] flex items-center justify-between px-[57px]">
          <p className="[font-family:'Inter',Helvetica] font-light text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            COPYRIGHT @ JUDEVA PTY LTD
          </p>

          <p className="[font-family:'Inter',Helvetica] font-light text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            DESIGN BY WEBASI
          </p>
        </div>
      </footer>
    </div>
  );
};
