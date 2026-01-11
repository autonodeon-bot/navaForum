import React from 'react';
import { Target, TrendingUp, Heart, Users } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const About: React.FC = () => {
  const goals = [
    {
      icon: <Target size={32} className="text-cyan-600" />,
      title: 'Качество услуг',
      desc: 'Мы стремимся улучшить качество услуг в детских бассейнах России и стран СНГ.'
    },
    {
      icon: <TrendingUp size={32} className="text-blue-600" />,
      title: 'Развитие',
      desc: 'Мотивировать специалистов развиваться, обучаться и повышать свой профессиональный статус.'
    },
    {
      icon: <Heart size={32} className="text-red-500" />,
      title: 'Спорт — норма жизни',
      desc: 'Поддерживать детский оздоровительный спорт и здоровье подрастающего поколения.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                 <img 
                  src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2070&auto=format&fit=crop" 
                  alt="Baby Swimming" 
                  className="relative rounded-3xl shadow-2xl z-10"
                />
                
                <div className="absolute -bottom-10 -right-5 md:-right-10 glass-card p-6 rounded-2xl z-20 max-w-[280px]">
                  <div className="flex items-center gap-4 mb-2">
                    <Users className="text-cyan-600" size={24}/>
                    <span className="font-bold text-slate-800 text-lg">Нетворкинг</span>
                  </div>
                  <p className="text-sm text-slate-600">Обмен опытом с коллегами из разных городов</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2">
            <FadeIn>
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">О событии</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                Объединяем экспертов <br/>в сфере детского плавания
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Невский форум «Дети и вода» собирает вместе уникальных экспертов в сфере плавания и детского развития, которые поделятся своими знаниями, наработками и кейсами в работе с детьми.
                Формат проведения – <span className="font-bold text-slate-800">Доклады</span> и <span className="font-bold text-slate-800">Мастер-классы в воде</span> с перерывами на нетворкинг и кофе-брейки.
              </p>
            </FadeIn>

            <div className="grid gap-6">
              {goals.map((goal, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} direction="left">
                  <div className="flex gap-4 p-4 rounded-xl bg-white border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                      {goal.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{goal.title}</h4>
                      <p className="text-sm text-slate-600">{goal.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};