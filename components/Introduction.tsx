
import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';

const Introduction: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-shrink-0">
        <GlobeIcon className="w-32 h-32 md:w-40 md:h-40 text-brand-accent" />
      </div>
      <div className="text-xl md:text-2xl text-slate-200 leading-relaxed text-center md:text-left">
        <p>En más de <span className="font-bold text-white">3,000 sedes</span> en <span className="font-bold text-white">150 países</span>, lanzamos <span className="font-bold text-white italic">El Valor de lo Desconocido</span>: eventos para resolver problemas, cumplir deseos y crear nuevos futuros.</p>
      </div>
    </section>
  );
};

export default Introduction;
