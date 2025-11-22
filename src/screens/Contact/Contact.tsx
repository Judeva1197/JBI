import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Navigation } from "../../components/Navigation";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white w-full relative overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-full mx-auto px-2 lg:px-20 py-12 flex flex-col gap-10">
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

      {/* Contact Form Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Form */}
          <div className="flex-1">
            <h2 
              className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-6"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              SEND US A MESSAGE
            </h2>

            <p 
              className="[font-family:'Poppins',Helvetica] font-light text-black text-base sm:text-sm mb-10"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-aos="fade-up" data-aos-duration="500">
                <label className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-sm mb-2 block">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#154060] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div data-aos="fade-up" data-aos-duration="600">
                  <label className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-sm mb-2 block">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#154060] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div data-aos="fade-up" data-aos-duration="700">
                  <label className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-sm mb-2 block">
                    PHONE *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#154060] transition-colors"
                    placeholder="0412 345 678"
                  />
                </div>
              </div>

              <div data-aos="fade-up" data-aos-duration="800">
                <label className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-sm mb-2 block">
                  PROPERTY TYPE
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#154060] transition-colors"
                >
                  <option value="">Select property type</option>
                  <option value="apartment">Apartment/Unit</option>
                  <option value="house">House</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="duplex">Duplex</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div data-aos="fade-up" data-aos-duration="900">
                <label className="[font-family:'Inter',Helvetica] font-medium text-[#154060] text-sm mb-2 block">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#154060] transition-colors resize-none"
                  placeholder="Tell us about your inspection needs..."
                />
              </div>

              <Button 
                type="submit"
                data-aos="fade-up" 
                data-aos-duration="1000"
                className="w-full sm:w-auto px-12 py-6 bg-[#154060] text-white text-base transition-all ease-in-out duration-[360ms] hover:bg-[#1a5a82]"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Image */}
          <div className="flex-1 lg:sticky lg:top-24">
            <img
              className="w-full rounded-[32px] object-cover shadow-xl"
              alt="Contact"
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              data-aos="fade-left"
              data-aos-duration="700"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            OUR SERVICE AREA
          </h2>
          
          <div 
            className="w-full h-96 bg-gray-300 rounded-[32px] flex items-center justify-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <p className="[font-family:'Inter',Helvetica] font-medium text-gray-600 text-xl">
              Map Placeholder - Sydney Wide Coverage
            </p>
          </div>
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
                Judeva Building Inspections (JBI) is a Sydney-based inspection service specialising in pre-purchase building inspections, moisture & water ingress diagnostics, thermal imaging and detailed
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