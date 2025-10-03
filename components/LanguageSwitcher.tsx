import React from 'react';

interface LanguageSwitcherProps {
  currentLang: 'es' | 'en';
  onChangeLang: (lang: 'es' | 'en') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onChangeLang }) => {
  const buttonBaseClasses = "px-3 py-1 text-sm font-bold uppercase transition-colors duration-300";
  const activeClasses = "bg-brand-accent text-white";
  const inactiveClasses = "bg-slate-700 text-slate-300 hover:bg-slate-600";

  return (
    <div className="fixed top-4 right-4 z-50 flex rounded-md overflow-hidden shadow-lg" role="group" aria-label="Language selection">
      <button
        onClick={() => onChangeLang('es')}
        className={`${buttonBaseClasses} ${currentLang === 'es' ? activeClasses : inactiveClasses}`}
        aria-pressed={currentLang === 'es'}
      >
        ES
      </button>
      <button
        onClick={() => onChangeLang('en')}
        className={`${buttonBaseClasses} ${currentLang === 'en' ? activeClasses : inactiveClasses}`}
        aria-pressed={currentLang === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
