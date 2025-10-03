
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const CallToAction: React.FC = () => {
  const whatsappText = encodeURIComponent("Nuevos Empleos para todos");
  const whatsappLink = `https://wa.me/17865644249?text=${whatsappText}`;

  return (
    <section className="text-center bg-slate-800/50 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-2">Únete al Movimiento</h2>
      <p className="text-slate-300 mb-6 text-lg">Sé parte de la revolución. Haz clic para ser incluido.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a 
          href="https://calendly.com/aahhoo/incluyeme" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-400 transition-colors duration-300 transform hover:scale-105"
        >
          Inclúyeme (Cuestionario)
        </a>
        <a 
          href={whatsappLink}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-400 transition-colors duration-300 transform hover:scale-105"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
