
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import CoreConcept from './components/CoreConcept';
import Vision from './components/Vision';
import Events from './components/Events';
import CallToAction from './components/CallToAction';
import ShareSection from './components/ShareSection';
import Footer from './components/Footer';
import { RocketIcon } from './components/icons/RocketIcon';

const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <main className="container mx-auto max-w-4xl px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
        <Header />
        <Hero />
        <Introduction />
        <CoreConcept />
        <Vision />
        <Events />
        <CallToAction />
        <ShareSection />
        <Footer />
      </main>
      <div className="absolute bottom-10 right-10 -rotate-45 opacity-20">
        <RocketIcon className="w-24 h-24 text-brand-light" />
      </div>
    </div>
  );
};

export default App;
