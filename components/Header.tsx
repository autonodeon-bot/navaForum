import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { NavItem } from '../types';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'О форуме', href: '#about' },
    { label: 'Программа', href: '#program' },
    { label: 'Спикеры', href: '#speakers' },
    { label: 'Стоимость', href: '#pricing' },
    { label: 'Контакты', href: '#contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
        window.open(href, '_blank');
        setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
           <div className={`font-heading font-black text-2xl tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
             НЕВСКИЙ <span className="text-cyan-500">ФОРУМ</span>
           </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-semibold hover:text-cyan-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://cbiletom.ru/event.php?event=11669"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition-all"
          >
            <Ticket size={18} />
            Купить билет
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://cbiletom.ru/event.php?event=11669"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-cyan-600 text-white py-3 rounded-lg font-bold mt-2"
          >
            Купить билет
          </a>
        </div>
      )}
    </header>
  );
};