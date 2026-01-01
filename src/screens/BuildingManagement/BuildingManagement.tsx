import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import GlareHover from "../../components/ReactBit/GlareHoverEffect";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";

const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "BUILDING & FM", href: "/building-management" },
    { label: "CONTACT US", href: "/contact" },
];

const managementServices = [
    "Routine and ad-hoc building inspections",
    "Defect identification and risk reporting",
    "Preventative and reactive maintenance coordination",
    "Contractor engagement and supervision",
    "In-house minor maintenance and remedial works",
    "Maintenance planning and budget forecasting",
    "Clear reporting to owners and strata managers"
];

const engagementModels = [
    "Fixed monthly management",
    "Hybrid management + labour models",
    "Project or defect management",
    "Maintenance coordination only"
];

const approachSteps = [
    "Inspect and understand the building",
    "Identify risks and priorities",
    "Recommend practical solutions",
    "Coordinate and supervise works",
    "Report clearly with photos and updates"
];

export const BuildingManagement = (): JSX.Element => {
    return (
        <div className="bg-white w-full relative overflow-x-hidden scroll-smooth">
            {/* Hero Section */}
            <section
                className="relative w-full min-h-[60vh] text-white bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2070')" }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 max-w-full mx-auto pb-12 flex flex-col gap-10">
                    <Navigation textColor="text-white" logoSrc="/logo.png" />

                    <div className="flex flex-col items-center text-center gap-6 py-16 px-2">
                        <h1
                            className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-5xl lg:text-[64px] leading-tight max-w-4xl drop-shadow-lg"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                        >
                            BUILDING & FACILITIES MANAGEMENT
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="relative py-16 lg:py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-6">
                                Builder-Led Oversight. <br /> Practical Solutions.
                            </h2>
                            <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-4">
                                Judeva provides builder-led Building & Facilities Management with practical oversight, clear communication, and cost-effective outcomes.
                            </p>
                            <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl mb-4">
                                Every building is overseen by a licensed NSW builder, ensuring maintenance decisions are technically sound, risks are identified early, and works are managed properly from inspection through to completion.
                            </p>
                            <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg sm:text-xl">
                                Our model is fully scalable — from single buildings to large, complex sites — with the ability to engage qualified staff and contractors under our direct supervision when required.
                            </p>
                        </div>
                        <div data-aos="fade-left">
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
                                    className="w-full rounded-[10px] object-cover h-[400px]"
                                    alt="Building Management"
                                    src="/bfm2.jpg"
                                />
                            </GlareHover>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Manage */}
            <section className="relative py-16 lg:py-32 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
                        data-aos="fade-down"
                    >
                        What We Manage
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="h-full min-h-[400px] order-2 lg:order-1" data-aos="fade-right">
                            <img
                                src="/bfm1.jpg"
                                className="w-full h-full object-cover rounded-xl shadow-lg"
                                alt="Facilities Management"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-6 order-1 lg:order-2" data-aos="fade-left">
                            <p className="text-xl text-[#154060] font-medium [font-family:'Poppins',Helvetica]">
                                We protect, maintain, and improve buildings through proactive and reactive management, including:
                            </p>
                            <ul className="space-y-4">
                                {managementServices.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 [font-family:'Poppins',Helvetica] text-lg text-black font-light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#154060] flex-shrink-0 mt-1 w-5 h-5">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Judeva */}
            <section className="relative py-16 lg:py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-center [font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-6"
                        data-aos="fade-down"
                    >
                        Why Judeva?
                    </h2>
                    <p
                        className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto [font-family:'Poppins',Helvetica]"
                        data-aos="fade-up"
                    >
                        Unlike traditional FM providers, Judeva offers hands-on builder oversight, not just administration.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Licensed builder oversight on all buildings",
                            "Faster issue diagnosis and practical solutions",
                            "Reduced repeat defects and unnecessary spend",
                            "One point of accountability",
                            "Ability to scale teams for larger sites while maintaining principal oversight"
                        ].map((point, index) => (
                            <Card
                                key={index}
                                className="border border-[#154060]/20 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <CardContent className="p-8 flex items-start gap-4 h-full">
                                    <span className="text-[#154060] text-2xl font-bold bg-[#154060]/10 p-2 rounded-full w-10 h-10 flex items-center justify-center shrink-0">✔</span>
                                    <p className="[font-family:'Poppins',Helvetica] font-light text-black text-lg">{point}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="relative py-16 lg:py-32 px-4 bg-[#154060] text-white">
                <div className="max-w-6xl mx-auto">
                    <h2
                        className="text-center [font-family:'Inter',Helvetica] font-semibold text-white text-3xl sm:text-5xl tracking-[0] leading-tight mb-6"
                        data-aos="fade-down"
                    >
                        Our Approach
                    </h2>
                    <p
                        className="text-center text-xl text-white/80 mb-16 [font-family:'Poppins',Helvetica]"
                        data-aos="fade-up"
                    >
                        Simple, transparent and outcome-focused.
                    </p>
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[40px] left-0 w-full h-1 bg-white/20 "></div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                            {approachSteps.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-6 text-center group"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Number Circle */}
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-full bg-[#154060] text-white flex items-center justify-center text-3xl font-bold border-4 border-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#154060] shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                            {index + 1}
                                        </div>
                                        {/* Connector for Mobile */}
                                        {index !== approachSteps.length - 1 && (
                                            <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-1 h-16 bg-white/20"></div>
                                        )}
                                    </div>

                                    {/* Text Card */}
                                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-full hover:bg-white/10 transition-colors">
                                        <p className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg">
                                            {step}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexible Engagement */}
            <section className="relative py-16 lg:py-32 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2
                        className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight mb-12"
                        data-aos="fade-down"
                    >
                        Flexible Engagement
                    </h2>
                    <p
                        className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto [font-family:'Poppins',Helvetica]"
                        data-aos="fade-up"
                    >
                        Services can be tailored to suit your building. All engagements are clearly scoped with transparent inclusions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {engagementModels.map((model, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#154060]/30 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#154060] text-lg">
                                    {model}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div
                        className="bg-[#154060]/5 p-8 md:p-12 rounded-3xl max-w-3xl mx-auto border border-[#154060]/10"
                        data-aos="zoom-in"
                    >
                        <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#154060] text-2xl md:text-3xl mb-4">
                            Contact Judeva
                        </h3>
                        <p className="[font-family:'Poppins',Helvetica] text-gray-700 text-lg mb-8">
                            Discuss your building or request a proposal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <a
                                href="mailto:eddy@judeva.com.au"
                                className="flex items-center gap-3 text-lg font-medium text-white bg-[#154060] px-6 py-3 rounded-full hover:bg-[#154060]/90 transition-colors shadow-lg"
                            >
                                <span>✉</span> eddy@judeva.com.au
                            </a>
                            <a
                                href="tel:0432800928"
                                className="flex items-center gap-3 text-lg font-medium text-[#154060] bg-white border border-[#154060] px-6 py-3 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
                            >
                                <span>📞</span> 0432 800 928
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};
