import React from 'react';
import { BookOpen, Droplets, Brain, Activity, HeartPulse, Stethoscope, Users } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Program: React.FC = () => {
  const topics = [
    { icon: <Droplets />, title: "Грудничковое плавание" },
    { icon: <Activity />, title: "Обучение плаванию в раннем возрасте" },
    { icon: <Brain />, title: "Психология в разных возрастных группах" },
    { icon: <Activity />, title: "Двигательное развитие детей" },
    { icon: <HeartPulse />, title: "Коррекционное плавание" },
    { icon: <Stethoscope />, title: "Смежные дисциплины (неврология, педагогика)" },
  ];

  const speakers = Array.from({ length: 4 }).map((_, i) => ({
    id: i,
    name: `Спикер ${i + 1}`,
    role: "Эксперт по плаванию",
    image: `https://picsum.photos/seed/speaker${i}/200/200`
  }));

  return (
    <section id="program" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Расписание</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Программа форума</h3>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <FadeIn direction="right" className="h-full">
            <div className="glass-card p-8 rounded-2xl h-full border-l-4 border-cyan-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-bl-lg">День 1</div>
              <h4 className="text-2xl font-bold font-heading text-slate-800 mb-2">25 Апреля</h4>
              <p className="text-cyan-600 font-semibold mb-6">10:00 – 19:00</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full"><BookOpen size={18} /></span>
                    <div>
                        <span className="font-bold text-slate-800 block">Лекционный блок</span>
                        <span className="text-sm text-slate-600">Насыщенные доклады от ведущих экспертов отрасли. Теория, методики, кейсы.</span>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full"><Users size={18} /></span>
                    <div>
                        <span className="font-bold text-slate-800 block">Нетворкинг</span>
                        <span className="text-sm text-slate-600">Кофе-брейки и общение с коллегами.</span>
                    </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="h-full">
            <div className="glass-card p-8 rounded-2xl h-full border-l-4 border-blue-600 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-bl-lg">День 2</div>
              <h4 className="text-2xl font-bold font-heading text-slate-800 mb-2">26 Апреля</h4>
              <p className="text-blue-600 font-semibold mb-6">10:00 – 19:00</p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-full"><Droplets size={18} /></span>
                    <div>
                        <span className="font-bold text-slate-800 block">Практика в воде</span>
                        <span className="text-sm text-slate-600">Мастер-классы в бассейне. Демонстрация методик и упражнений.</span>
                    </div>
                </li>
                 <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-full"><BookOpen size={18} /></span>
                    <div>
                        <span className="font-bold text-slate-800 block">Доклады в зале</span>
                        <span className="text-sm text-slate-600">Продолжение лекционной программы параллельно с практикой.</span>
                    </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Topics Grid */}
        <div className="mb-20">
           <FadeIn>
             <h3 className="text-2xl font-bold text-center mb-8 font-heading text-slate-800">Ключевые секции</h3>
           </FadeIn>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
             {topics.map((topic, idx) => (
               <FadeIn key={idx} delay={idx * 0.05}>
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:border-cyan-200 hover:shadow-md transition-all h-full flex flex-col items-center justify-center gap-3 group">
                   <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-300">
                     {topic.icon}
                   </div>
                   <p className="font-semibold text-slate-700">{topic.title}</p>
                 </div>
               </FadeIn>
             ))}
           </div>
        </div>

        {/* Speakers Teaser */}
        <div id="speakers">
          <FadeIn>
             <h3 className="text-2xl font-bold text-center mb-10 font-heading text-slate-800">Спикеры форума</h3>
             <p className="text-center text-slate-500 mb-8 -mt-6">10 ведущих экспертов (список обновляется)</p>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {speakers.map((speaker, idx) => (
                <FadeIn key={speaker.id} delay={idx * 0.1}>
                    <div className="group relative overflow-hidden rounded-xl aspect-[3/4]">
                        <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                            <span className="text-white font-bold text-lg">{speaker.name}</span>
                            <span className="text-cyan-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{speaker.role}</span>
                        </div>
                    </div>
                </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};