import React from 'react';
import { Check, CreditCard, Users } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Pricing: React.FC = () => {
  const tiers = [
    { price: '6 500 ₽', deadline: 'до 15 января', active: false, passed: true },
    { price: '8 000 ₽', deadline: 'до 1 марта', active: true, passed: false }, // Assuming current date is between Jan 15 and Mar 1 for demo logic or just purely visual
    { price: '9 500 ₽', deadline: 'до 1 апреля', active: false, passed: false },
    { price: '11 000 ₽', deadline: 'до 24 апреля', active: false, passed: false },
  ];

  return (
    <section id="pricing" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <FadeIn>
              <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">Билеты</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">Стоимость участия</h3>
              <p className="mt-4 text-slate-500">Успейте купить билет по выгодной цене</p>
           </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-4 mb-12">
            {tiers.map((tier, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                    <div className={`p-6 rounded-2xl border text-center transition-all ${
                        tier.active 
                        ? 'border-cyan-500 bg-cyan-50 shadow-lg scale-105 z-10' 
                        : tier.passed 
                            ? 'border-gray-200 bg-gray-50 opacity-60 grayscale' 
                            : 'border-slate-200 bg-white'
                    }`}>
                        <div className="text-sm text-slate-500 mb-2">{tier.deadline}</div>
                        <div className={`text-2xl font-bold mb-2 ${tier.active ? 'text-cyan-700' : 'text-slate-800'}`}>{tier.price}</div>
                        {tier.active && <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide">Текущая цена</div>}
                        {tier.passed && <div className="text-xs font-bold text-red-400 uppercase tracking-wide">Завершено</div>}
                    </div>
                </FadeIn>
            ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.2} direction="right">
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full">
                    <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Users className="text-cyan-400"/> Групповое участие
                        </h4>
                        <p className="text-blue-100 mb-6">Собирайтесь командой и получайте выгоду! Идеально для школ плавания и спортивных клубов.</p>
                        <div className="text-3xl font-bold text-cyan-400 mb-2">-10%</div>
                        <p className="text-sm text-blue-200">При покупке от 3-х билетов</p>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="left">
                <div className="glass-card bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col justify-between h-full">
                     <div>
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                            <CreditCard className="text-cyan-600"/> Условия оплаты
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-600">
                                <Check size={18} className="text-green-500" />
                                <span>Возможна рассрочка от Т-Банк</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <Check size={18} className="text-green-500" />
                                <span>Оплата для юридических лиц по счету</span>
                            </li>
                             <li className="flex items-center gap-3 text-slate-600">
                                <Check size={18} className="text-green-500" />
                                <span>Безопасная оплата картой</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <a 
                            href="https://cbiletom.ru/event.php?event=11669"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-xl transition-colors"
                        >
                            Перейти к оплате
                        </a>
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};