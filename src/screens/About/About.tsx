import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import GlareHover from "../../components/ReactBit/GlareHoverEffect";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

const setsUsApartPoints = [
  { title: "Licensed Builder Oversight", desc: "on every inspection and management service" },
  { title: "Real-World Construction Experience", desc: "not just reporting" },
  { title: "Quality-Focused Outcomes", desc: "durable finishes, compliant works" },
  { title: "Clear Reporting & Practical Advice", desc: "for owners and managers" },
  { title: "Scalable Management Model", desc: "suitable for small to large complexes" },
];

const inspectionServices = [
  "Pre-purchase & pre-sale inspections",
  "Defect & warranty inspections",
  "Water ingress investigations",
  "Thermal imaging & moisture detection assessments",
  "Detailed reports for strata, owners and insurers",
];

const managementServices = [
  "Building condition assessments",
  "Preventative maintenance planning",
  "Contractor coordination & supervision",
  "Compliance oversight (fire, safety, essential services)",
  "Budget planning & asset lifecycle advice",
];

const remedialServices = [
  "Water ingress repairs",
  "Concrete crack injection",
  "Sealant & waterproofing repairs",
  "Gyprock, painting & minor building works",
  "Make-good works following defects",
];

const whoWeWorkWith = [
  "Strata committees & owners corporations",
  "Property & strata managers",
  "Commercial building owners",
  "Developers & asset investors",
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
          <Navigation textColor="text-white" logoText="JUDEVA GROUP" />

          <div className="flex flex-col items-center text-center gap-6 py-16 px-2">
            <h1
              className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-tight max-w-4xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              ABOUT JUDEVA
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
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
                alt="Who We Are"
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
                Who We Are
              </h2>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-4" data-aos="fade-up" data-aos-duration="1000">
                JUDEVA is a builder-led building inspection and building & facilities management company, delivering practical, honest and high-quality outcomes for strata, commercial and residential assets across Sydney NSW.
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-4" data-aos="fade-up" data-aos-duration="1000">
                Founded and led by a licensed builder, JUDEVA combines hands-on construction knowledge with proactive management systems to ensure buildings are inspected correctly, maintained efficiently and repaired to a high standard.
              </p>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl" data-aos="fade-up" data-aos-duration="1000">
                We don’t just identify issues, we understand how buildings perform, how they fail and how to fix them properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {setsUsApartPoints.map((point, index) => (
              <Card
                key={index}
                className="border border-[#154060]/20 shadow-md hover:shadow-lg transition-shadow ease-in-out duration-[360ms]"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration={500 * (index + 1) + ""}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#154060] text-xl font-bold">{point.title}</h3>
                    <p className="[font-family:'Poppins',Helvetica] font-light text-black text-base">
                      {point.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center [font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000">
            Whether it’s a defect inspection, ongoing building management or targeted remedial works, JUDEVA approaches every building as a long-term asset.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Building Inspections */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏠</span>
                <h3 className="text-[#154060] text-2xl font-bold">Building Inspections</h3>
              </div>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm leading-relaxed mb-6">
                JUDEVA provides professional building inspections using thermal imaging, moisture testing and water testing to identify defects, water ingress and performance issues.
              </p>
              <h4 className="font-semibold text-[#154060] text-base mb-4">Inspection services include:</h4>
              <ul className="space-y-2 mb-6">
                {inspectionServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#154060] mt-1">•</span>
                    <span className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-[#154060]/5 rounded-lg border-l-4 border-[#154060]">
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#154060] text-xs sm:text-sm">
                  📌 Inspection enquiries are managed via our online inspection request form for fast turnaround.
                </p>
              </div>
            </div>

            {/* Building & Facilities Management */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏢</span>
                <h3 className="text-[#154060] text-2xl font-bold">Building & Facilities Management</h3>
              </div>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm leading-relaxed mb-6">
                Our Building & Facilities Management services are designed to protect asset value, ensure compliance and reduce reactive maintenance.
              </p>
              <h4 className="font-semibold text-[#154060] text-base mb-4">BM/FM services include:</h4>
              <ul className="space-y-2 mb-6">
                {managementServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#154060] mt-1">•</span>
                    <span className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm italic">
                JUDEVA can manage both small and large buildings, scaling resources as required while maintaining direct oversight by the principal.
              </p>
            </div>

            {/* Remedial & Maintenance Services */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🛠</span>
                <h3 className="text-[#154060] text-2xl font-bold">Remedial & Maintenance</h3>
              </div>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm leading-relaxed mb-6">
                To complement our inspection and management services, JUDEVA provides targeted remedial and maintenance works, ensuring issues are resolved correctly and not just patched.
              </p>
              <h4 className="font-semibold text-[#154060] text-base mb-4">Typical works include:</h4>
              <ul className="space-y-2 mb-6">
                {remedialServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#154060] mt-1">•</span>
                    <span className="[font-family:'Poppins',Helvetica] font-light text-black text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="[font-family:'Poppins',Helvetica] font-light text-black text-sm italic">
                This integrated approach allows defects to be identified, scoped, repaired and verified under one experienced provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-20 px-4 bg-[#154060] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="[font-family:'Inter',Helvetica] font-semibold text-3xl sm:text-5xl tracking-[0] leading-tight mb-8"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Our Approach
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-light text-xl mb-8" data-aos="fade-up" data-aos-duration="1000">
            JUDEVA operates with a simple philosophy:<br />
            <span className="font-bold text-2xl block mt-4">Inspect thoroughly. Manage proactively. Repair correctly.</span>
          </p>
          <p className="[font-family:'Poppins',Helvetica] font-light text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            We focus on quality workmanship, clear communication and long-term performance, helping clients avoid repeat failures and unnecessary costs.
          </p>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Who We Work With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whoWeWorkWith.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#154060]/10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p className="[font-family:'Poppins',Helvetica] font-medium text-[#154060] text-lg">
                  {item}
                </p>
              </div>
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

          <div className="relative  flex flex-col items-center justify-center text-center gap-6 px-6 py-16 sm:py-20">
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
              “At JUDEVA, our mission is to protect and enhance building assets through expert inspections and proactive building & facilities management, delivering high-quality finishes, long-term performance and peace of mind for owners.”
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

      {/* Contact Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-8"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            Contact JUDEVA
          </h2>
          <div className="space-y-6 text-black">
            <p className="[font-family:'Poppins',Helvetica] font-light text-lg sm:text-xl" data-aos="fade-up">
              For building inspections, please submit an enquiry via our <Link to="/contact" className="text-[#154060] font-medium underline">online inspection form</Link>.
            </p>
            <p className="[font-family:'Poppins',Helvetica] font-light text-lg sm:text-xl" data-aos="fade-up">
              For Building & Facilities Management or remedial services, contact us directly.
            </p>
            <div className="flex flex-col gap-4 mt-8" data-aos="fade-up" data-aos-delay="200">
              <a href="mailto:eddy@judeva.com.au" className="[font-family:'Poppins',Helvetica] text-xl sm:text-2xl font-medium text-[#154060] hover:underline">
                📧 eddy@judeva.com.au
              </a>
              <a href="tel:0432800928" className="[font-family:'Poppins',Helvetica] text-xl sm:text-2xl font-medium text-[#154060] hover:underline">
                📞 0432 800 928
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer logoText="JUDEVA GROUP" />
    </div>
  );
};
