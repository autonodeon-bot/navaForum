import React from 'react';
import { Users, Calendar, Ticket, Send } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const PhotoButtons: React.FC = () => {
  const buttons = [
    { label: 'Спикеры', icon: <Users size={24} />, href: '#speakers', bg: 'bg-blue-600' },
    { label: 'Программа', icon: <Calendar size={24} />, href: '#program', bg: 'bg-cyan-600' },
    { label: 'Купить билет', icon: <Ticket size={24} />, href: 'https://cbiletom.ru/event.php?event=11669', external: true, bg: 'bg-indigo-600' },
    { label: 'Группа ВК', icon: <span className="font-bold text-lg">VK</span>, href: 'https://vk.com/forumdetyivodaspb', external: true, bg: 'bg-[#0077FF]' },
    { label: 'ТГ-канал', icon: <Send size={24} />, href: 'https://t.me/forumdetyivodaspb', external: true, bg: 'bg-[#229ED9]' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (!external && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((btn, idx) => (
            <FadeIn key={idx} delay={idx * 0.05} className="w-full sm:w-auto">
              <a 
                href={btn.href} 
                target={btn.external ? "_blank" : "_self"}
                rel={btn.external ? "noopener noreferrer" : ""}
                onClick={(e) => handleClick(e, btn.href, btn.external)}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold shadow-lg transform transition-all hover:scale-105 hover:shadow-xl w-full sm:w-[200px] ${btn.bg}`}
              >
                {btn.icon}
                {btn.label}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};