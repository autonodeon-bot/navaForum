import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Countdown } from './Countdown';
import { FadeIn } from './ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070&auto=format&fit=crop" 
          alt="Swimming Pool" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/70 to-cyan-800/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-cyan-200 mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide uppercase">Главное событие года</span>
            </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-white leading-tight mb-6">
            Невский форум <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">«Дети и вода»</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-white/90 text-lg md:text-xl font-medium mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="text-cyan-400" />
              <span>25-26 апреля 2026</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="text-cyan-400" />
              <span>Санкт-Петербург</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <a 
            href="https://cbiletom.ru/event.php?event=11669"
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-white text-xl font-bold px-10 py-5 rounded-full shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)] transition-all transform hover:scale-105"
          >
            <span>Принять участие</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>

        <FadeIn delay={0.6}>
          <Countdown />
        </FadeIn>
      </div>
      
      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#f0f9ff]"></path>
        </svg>
      </div>
    </section>
  );
};