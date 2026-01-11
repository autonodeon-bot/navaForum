import React, { useState, useEffect } from 'react';

export const Countdown: React.FC = () => {
  const targetDate = new Date('2026-04-25T10:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 md:gap-8 text-white mt-8">
      {[
        { value: timeLeft.days, label: 'Дней' },
        { value: timeLeft.hours, label: 'Часов' },
        { value: timeLeft.minutes, label: 'Минут' },
        { value: timeLeft.seconds, label: 'Секунд' }
      ].map((item, idx) => (
        <div key={idx} className="text-center bg-white/10 backdrop-blur-md rounded-lg p-3 min-w-[70px] md:min-w-[90px] border border-white/20">
          <div className="text-2xl md:text-4xl font-bold font-heading text-cyan-300">{item.value}</div>
          <div className="text-xs md:text-sm uppercase tracking-wider text-white/80">{item.label}</div>
        </div>
      ))}
    </div>
  );
};