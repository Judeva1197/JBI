import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import GlareHover from "../../components/ReactBit/GlareHoverEffect";
import { Navigation } from "../../components/Navigation";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "BUILDING & FM", href: "/building-management" },
  { label: "CONTACT US", href: "/contact" },
];

const whyChooseUsPoints = [
  "Licensed Builder conducting all inspections",
  "Clear, easy-to-read reports with photos, recommendations & risk ratings",
  "Thermal imaging & moisture detection on premium inspections",
  "Fast turnaround",
  "Fixed pricing with no hidden costs",
  "Independent assessment — no repair upselling",
  "Backed by real construction experience",
];

const services = [
  {
    title: "Pre-Purchase Building Inspection",
    description:
      "A detailed inspection covering internal areas, external areas, roof space, underfloor (if accessible), structure, moisture, defects, maintenance issues and safety hazards. Ideal for buyers, sellers & investors.",
  },
  {
    title: "Moisture & Water Ingress Investigation",
    description:
      "Advanced inspections using moisture meters and thermal imaging to identify hidden leaks, moisture intrusion, and potential mould-risk areas. Perfect for strata, homeowners & remedial investigations.",
  },
  {
    title: "Dilapidation Reporting",
    description:
      "A photographic and written condition report of neighbouring properties before & after construction works. Common for builders, developers & owners needing protection from damage claims.",
  },
  {
    title: "Thermal Imaging & Moisture Detection",
    description:
      "Enhance your pre-purchase or pre-sale inspection with advanced thermal imaging and moisture testing. This add-on helps identify hidden leaks, dampness, insulation gaps, roof moisture and early-stage water damage that aren’t visible to the eye.",
  },
];

const serviceAreas = [
  "Western Sydney",
  "Inner West",
  "Hills District",
  "Parramatta",
  "Blacktown",
  "Penrith",
  "Liverpool",
  "Northern Districts",
];

const eddyCredentials = [
  "NSW Licensed Builder",
  "Cert IV & Diploma in Building & Construction",
  "Master Builders Association Inspection Training",
  "Head of Building & Facilities Management",
  "Experience across: defects, water ingress, structural issues",
  "Hands-on knowledge of construction tolerances & safety",
];

const tools = [
  "Professional moisture meters",
  "Thermal imaging cameras",
  "Endoscopic cavity cameras",
  "Laser measurers",
  "Digital reporting & CRM tools",
  "High-Resolution Photography & Reporting Software",
  "Surface Checking Tools",
  "Dye Testing Kit",
  "Moisture Detection Scanner"
];

export const About = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] text-white bg-cover lg:bg-contain bg-center"
        style={{ backgroundImage: "url('/aboutusbg.jpg')" }}
      >
        <div className="relative z-10 max-w-full mx-auto pb-12 flex flex-col gap-10">
          <Navigation textColor="text-white" />

          <div className="flex flex-col items-center text-center gap-6 py-16 px-2">
            <h1
              className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-tight max-w-4xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              ABOUT US
            </h1>
          </div>
        </div>
      </section>

      {/* About JBI Section */}
      <section className="relative py-6 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                className="w-full rounded-[10px] object-cover"
                alt="Building inspection"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              />
            </GlareHover>

            <div>
              <h2
                className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-6"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                About Judeva Building Inspections (JBI)
              </h2>
              <p
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Judeva Building Inspections (JBI) is a Sydney-based inspection service specialising in pre-purchase building inspections, moisture & water ingress diagnostics, thermal imaging and detailed condition reporting for apartments, houses and townhouses.
              </p>
              <p
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                We combine licensed building expertise with modern equipment and clear, practical reporting. Our goal is simple: give clients certainty, protect their investment and identify issues before they become major problems.
              </p>
              <p
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                JBI operates as part of the Judeva Pty Ltd group — a licensed building and remedial business with hands-on experience in construction, facilities management, defect rectification and multi-site building operations across NSW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Eddy Section */}
      <section className="relative py-6 lg:py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-6"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                About Eddy – Licensed Builder & Inspector
              </h2>
              <p
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Hi, I’m Eddy, a Licensed Builder with years of practical experience in residential construction, quality checks and identifying building issues before they become major problems. This mix of real-world building knowledge and inspection skills gives you a level of detail and accuracy many inspectors don’t offer.


              </p>
              <p
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                My reports are written in simple, easy-to-understand language so you know exactly what’s going on with your property and what steps to take next. Buyers, owners and investors rely on my inspections for peace of mind, clarity and strong decision-making.


              </p>

              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-6"
                data-aos="fade-up"
                data-aos-duration="1000">At Judeva Building Inspections, I focus on delivering reliable results, fast turnaround times and professional support—helping you protect your biggest investment with confidence</p>
              <p
                className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg sm:text-xl mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                My background includes:
              </p>
              <ul className="space-y-3">
                {eddyCredentials.map((credential, index) => (
                  <li
                    key={index}
                    className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl flex items-start gap-3"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration={500 * (index + 1) + ""}
                  >
                    <span className="text-[#154060] font-bold mt-1">•</span>
                    {credential}
                  </li>
                ))}
              </ul>
              <p
                className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mt-6 italic"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                I understand buildings from the ground up — and I bring that practical experience into every inspection.
              </p>
            </div>

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
                className="w-full rounded-[10px] object-cover"
                alt="Eddy - Licensed Builder"
                src="/owner.jpeg"
              />
            </GlareHover>
          </div>
        </div>
      </section>

      {/* Why Choose Judeva Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Why Choose Judeva?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((point, index) => (
              <Card
                key={index}
                className="border border-[#154060]/20 shadow-md hover:shadow-lg transition-shadow ease-in-out duration-[360ms]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={500 * (index + 1) + ""}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-[#154060] text-2xl font-bold">✔</span>
                    <p className="[font-family:'Poppins',Helvetica] font-light text-black text-base">
                      {point}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow ease-in-out duration-[360ms]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={1000 * index + ""}
              >
                <CardContent className="p-6">
                  <div className="text-[#154060] text-3xl font-bold mb-4">
                    {index + 1}.
                  </div>
                  <h3 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-xl mb-4">
                    {service.title}
                  </h3>
                  <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Service Areas
          </h2>
          <p
            className="text-center [font-family:'Poppins',Helvetica] font-light text-base sm:text-xl text-[#154060] mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Sydney metropolitan area, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="text-center p-4 bg-[#154060]/5 rounded-lg hover:bg-[#154060]/10 transition-colors ease-in-out duration-[360ms]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={300 * (index + 1) + ""}
              >
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#154060] text-base">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Our Process (Simple & Efficient)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Book online or enquire",
              "Inspection completed onsite (usually 60–90 mins)",
              "Full written report delivered",
              "Follow-up phone call (optional) to clarify findings",
            ].map((step, index) => (
              <Card
                key={index}
                className="border border-[#154060]/20 text-center"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={500 * (index + 1) + ""}
              >
                <CardContent className="p-6">
                  <div className="text-[#154060] text-4xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">
                    {step}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technology Section */}
      <section className="relative py-6 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Tools & Technology We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="border border-[#154060]/20 text-center hover:shadow-lg transition-shadow ease-in-out duration-[360ms]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={400 * (index + 1) + ""}
              >
                <CardContent className="p-6">
                  <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">
                    {tool}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="relative px-6 lg:px-20 my-20">
        <div className="relative w-full bg-[#154060] rounded-[15px] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full rounded-[32px] object-cover opacity-20"
            alt="Background"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 px-6 py-16 sm:py-20">
            <h2
              className="[font-family:'Inter',Helvetica] font-medium text-white text-3xl sm:text-5xl max-w-4xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              Mission Statement
            </h2>
            <p
              className="[font-family:'Poppins',Helvetica] font-light text-white text-xl sm:text-2xl italic max-w-3xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              "To deliver clear, honest, and reliable building inspections that protect clients' investments and provide real peace of mind."
            </p>
            <Button
              data-aos="fade-up"
              data-aos-duration="500"
              className="w-fit p-6 max-w-xs sm:max-w-sm bg-white/20 border border-white text-white text-lg transition-all ease-in-out duration-[360ms] hover:bg-white/30 mt-6"
            >
              BOOK AN INSPECTION
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
                src="/2381e0f2-52ae-4253-81da-16c35dfc62c3-2.png"
              />
              <p className="[font-family:'Poppins',Helvetica] font-light text-base sm:text-sm">
                Focus on delivering reliable results, fast turnaround times and professional support—helping you protect your biggest investment with confidence.
              </p>
            </div>

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

