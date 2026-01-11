import React from 'react';
import { Phone, Send, MapPin } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contacts" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <FadeIn>
              <h2 className="text-3xl font-heading font-bold mb-8">Свяжитесь с нами</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                    <Phone size={20} />
                  </div>
                  <a href="tel:+79807421770" className="text-xl hover:text-cyan-400 transition-colors">+7 (980) 742-17-70</a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg text-slate-300">Санкт-Петербург</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://vk.com/forumdetyivodaspb" target="_blank" rel="noopener noreferrer" className="bg-[#0077FF] hover:bg-[#0066DD] px-6 py-3 rounded-lg font-bold transition-colors">
                  ВКонтакте
                </a>
                <a href="https://t.me/forumdetyivodaspb" target="_blank" rel="noopener noreferrer" className="bg-[#229ED9] hover:bg-[#1E8DBF] px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2">
                  <Send size={18} /> Telegram
                </a>
              </div>
            </FadeIn>
          </div>

          <div>
             <FadeIn delay={0.2}>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-4">Остались вопросы?</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input type="text" placeholder="Ваше имя" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Телефон" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                  <div>
                    <textarea rows={3} placeholder="Ваш вопрос" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]">
                    Отправить
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </div>
            </FadeIn>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
          &copy; 2026 Невский форум «Дети и вода». Все права защищены.
        </div>
      </div>
    </section>
  );
};