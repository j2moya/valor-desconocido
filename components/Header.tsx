import React from 'react';

interface HeaderContent {
  quote: string;
  cite: string;
}

const Header: React.FC<{ content: HeaderContent }> = ({ content }) => {
  return (
    <header className="text-center">
      <blockquote className="text-2xl md:text-3xl font-light text-slate-200 leading-normal">
        <p>{content.quote}</p>
        <cite className="block text-right mt-4 not-italic text-slate-300">{content.cite}</cite>
      </blockquote>
    </header>
  );
};

export default Header;
