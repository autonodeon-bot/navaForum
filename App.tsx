import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Program } from './components/Program';
import { Pricing } from './components/Pricing';
import { PhotoButtons } from './components/PhotoButtons';
import { Contact } from './components/Contact';
import { Popup } from './components/Popup';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      <Header />
      <Hero />
      <About />
      <Program />
      <Pricing />
      <PhotoButtons />
      <Contact />
      <Popup />
    </div>
  );
}

export default App;