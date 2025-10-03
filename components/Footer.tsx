
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-slate-400 border-t border-slate-700 pt-8 mt-12">
      <p>&copy; {new Date().getFullYear()} El Valor de lo Desconocido. Todos los derechos reservados.</p>
      <p className="mt-2 text-sm">Creando una red global para un futuro mejor.</p>
    </footer>
  );
};

export default Footer;
