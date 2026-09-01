import React from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Gaurav
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Sisodiya
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button inline-block">
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center opacity-0 animate-fade-in-delay-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Multi-layered soft ambient glows for seamless blending */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-purple-600/30 blur-3xl opacity-75 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl transform scale-110" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-primary/40 to-transparent blur-md opacity-50" />

              {/* Profile Image in circular frame */}
              {/* Profile Image in circular frame */}
              <div className="relative z-10 w-full h-full rounded-full p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-sm shadow-2xl">
                <img
                  src="src\assets\portfolio_image__.png"
                  alt="Gaurav Sisodiya"
                  className="w-full h-full object-cover rounded-full border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
