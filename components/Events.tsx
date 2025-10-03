
import React from 'react';

const EventItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <li className="border-l-4 border-brand-accent pl-6 py-3 transition-all duration-300 hover:bg-slate-800/50">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-300 mt-1">{description}</p>
  </li>
);

const Events: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Eventos Temáticos</h2>
      <ul className="space-y-6">
        <EventItem title="“El Valor de lo Desconocido”" description="Cómo transformar incertidumbre en oportunidad." />
        <EventItem title="“Resolver un Problema, Cumplir un Deseo”" description="La nueva forma de asistencia integral." />
        <EventItem title="“Agentes del Futuro”" description="Comunidad que escala hasta la cima del gran embudo social, donde todos tienen un lugar." />
      </ul>
    </section>
  );
};

export default Events;
