import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import CoreConcept from './components/CoreConcept';
import Vision from './components/Vision';
import Events from './components/Events';
import CallToAction from './components/CallToAction';
import ShareSection from './components/ShareSection';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { RocketIcon } from './components/icons/RocketIcon';
import { content } from './content';

type Language = 'es' | 'en';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('es');
  const currentContent = content[language];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = currentContent.pageTitle;
  }, [language, currentContent.pageTitle]);

  return (
    <div className="relative overflow-hidden">
      <LanguageSwitcher currentLang={language} onChangeLang={handleLanguageChange} />
      <main className="container mx-auto max-w-4xl px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
        <Header content={currentContent.header} />
        <Hero content={currentContent.hero} />
        <Introduction content={currentContent.introduction} />
        <CoreConcept content={currentContent.coreConcept} />
        <Vision content={currentContent.vision} />
        <Events content={currentContent.events} />
        <CallToAction content={currentContent.callToAction} />
        <ShareSection content={currentContent.shareSection} />
        <Footer content={currentContent.footer} />
      </main>
      <div className="absolute bottom-10 right-10 -rotate-45 opacity-20">
        <RocketIcon className="w-24 h-24 text-brand-light" />
      </div>
    </div>
  );
};

export default App;
