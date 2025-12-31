import { useRef } from "react";
import { Inspection } from "../../components/Inspection";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Navigation } from "../../components/Navigation";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BUILDING & FM", href: "/building-management" },
  { label: "CONTACT US", href: "/contact" },
];

export const Contact = (): JSX.Element => {
  const inspectionFormRef = useRef<HTMLDivElement | null>(null);

  const scrollToInspectionForm = () => {
    if (inspectionFormRef.current) {
      inspectionFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white w-full relative overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-full mx-auto px-2 lg:px-20 pb-12 flex flex-col gap-10">
          <Navigation textColor="text-white" />

          <div className="flex flex-col items-center text-center gap-6 py-16 px-2">
            <h1
              className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-tight max-w-4xl"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              GET IN TOUCH WITH US
            </h1>

            <p className="[font-family:'Poppins',Helvetica] font-light text-white text-lg sm:text-sm" data-aos="fade-up" data-aos-duration="1000">
              Available Monday–Saturday | Fast Response | Professional Service
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              data-aos="fade-up"
              data-aos-duration="500"
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#154060] flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-xl">
                  PHONE
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">
                  0432 800 928
                </p>
              </CardContent>
            </Card>

            <Card
              data-aos="fade-up"
              data-aos-duration="700"
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#154060] flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-xl">
                  EMAIL
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm break-all">
                  inspections@judeva.com.au
                </p>
              </CardContent>
            </Card>

            <Card
              data-aos="fade-up"
              data-aos-duration="900"
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#154060] flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-xl">
                  LOCATION
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">
                  Sydney-Wide Service
                </p>
              </CardContent>
            </Card>

            <Card
              data-aos="fade-up"
              data-aos-duration="1100"
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#154060] flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-xl">
                  HOURS
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">
                  Mon-Sat: 7AM - 6PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspection Form Section */}
      <section className="relative py-20 px-4" id="inspection-form">
        <div className="max-w-6xl mx-auto" ref={inspectionFormRef}>
          <Inspection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-2 lg:px-20 my-20">
        <div className="relative w-full bg-[#154060] rounded-[15px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full rounded-[32px] object-cover opacity-40"
            alt="CTA Background"
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=80"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-6 py-16 sm:py-20">
            <h2
              className="[font-family:'Inter',Helvetica] font-medium text-white text-3xl sm:text-5xl uppercase max-w-4xl"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              Ready to Book Your Inspection?
            </h2>

            <p
              className="[font-family:'Poppins',Helvetica] font-light text-white text-lg max-w-2xl"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Get professional building inspection services with same-day reports available
            </p>

            <Button
              data-aos="fade-up"
              data-aos-duration="900"
              onClick={scrollToInspectionForm}
              className="w-fit p-6 max-w-xs sm:max-w-sm bg-white/20 border border-white text-white text-lg transition-all ease-in-out duration-[360ms] hover:bg-white/30"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#154060] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col mt-[-35px]">
              <img
                className="w-56 sm:w-72 h-auto object-contain"
                alt="Element"
                src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-1.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                Focus on delivering reliable results, fast turnaround times and professional support—helping you protect your biggest investment with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="[font-family:'Inter',Helvetica] font-semibold text-xl mb-2">
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