
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <blockquote className="text-2xl md:text-3xl font-light text-slate-200 leading-normal">
        <p>“Cada 75 años surge una revolución que cambia los empleos; hoy estamos en ese periodo”</p>
        <cite className="block text-right mt-4 not-italic text-slate-300">– Sam Altman</cite>
      </blockquote>
    </header>
  );
};

export default Header;
