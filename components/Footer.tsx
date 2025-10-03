import React from 'react';

interface FooterContent {
  copyright: string;
  tagline: string;
}

const Footer: React.FC<{ content: FooterContent }> = ({ content }) => {
  return (
    <footer className="text-center text-slate-400 border-t border-slate-700 pt-8 mt-12">
      <p>&copy; {new Date().getFullYear()} {content.copyright}</p>
      <p className="mt-2 text-sm">{content.tagline}</p>
    </footer>
  );
};

export default Footer;
