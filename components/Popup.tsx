import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000); // Show after 7 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Content */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in-up">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={32} className="-ml-1 mt-1" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Будьте в курсе!</h3>
            <p className="text-slate-600 mb-6">Подпишитесь на наши каналы, чтобы не пропустить обновления программы и новости форума.</p>
            
            <div className="space-y-3">
                <a href="https://t.me/forumdetyivodaspb" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#229ED9] hover:bg-[#1E8DBF] text-white font-bold py-3 rounded-xl transition-colors">
                   <Send size={20} /> Telegram канал
                </a>
                <a href="https://vk.com/forumdetyivodaspb" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#0077FF] hover:bg-[#0066DD] text-white font-bold py-3 rounded-xl transition-colors">
                   <span className="font-bold text-xl">VK</span> Группа ВКонтакте
                </a>
            </div>
            
             <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-slate-400 hover:text-slate-600 underline"
            >
                Спасибо, я уже подписан
            </button>
        </div>
      </div>
    </div>
  );
};