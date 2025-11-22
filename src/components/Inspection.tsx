import React, { forwardRef } from "react";

export const Inspection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="w-full py-12">
      <div className="flex flex-col items-center justify-center gap-8 w-full">
        <h2 
          className="[font-family:'Inter',Helvetica] font-semibold text-[#154060] text-3xl sm:text-5xl tracking-[0] leading-tight text-center"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          BOOK YOUR INSPECTION
        </h2>

        <p 
          className="[font-family:'Poppins',Helvetica] font-light text-black text-base sm:text-sm text-center max-w-2xl"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Embedded Inspection Form */}
        <div 
          className="w-full flex justify-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <iframe 
             src='https://formitize.co/Qk6V6-GB' 
            style={{ 
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }} 
            height='640' 
            width='100%'
            title="Inspection Form"
            className="max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
});

Inspection.displayName = "Inspection";

export default Inspection;
