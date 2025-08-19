"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-10 bg-white/60 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12">
        {/* Left - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold leading-tight text-black dark:text-white mb-6">
            Empowering <span className="text-primary">Every Idea</span> <br />
            <span className="text-gradient">Under One Roof</span>
          </h1>
          <p className="text-body-color dark:text-body-color-dark mb-8 text-base sm:text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            We bring together innovative products and services to help businesses scale efficiently in the digital era. From management tools to specialized industry solutions, we make ideas thrive.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shraddhasalvi272@gmail.com"
              target="_blank"
              className="bg-primary hover:bg-primary/80 rounded px-8 py-4 text-base font-semibold text-white transition-all duration-300"
            >
              Contact Us
            </a>
            <Link
              href="#about"
              className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded px-8 py-4 text-base font-semibold text-black dark:text-white transition-all duration-300"
            >
              Discover Our Story
            </Link>
          </div>
        </div>

        {/* Right - Decorative SVG / abstract shapes */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Example: floating circles */}
          <div className="absolute top-0 right-0 animate-bounce">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-1/4 animate-pulse">
            <div className="w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
