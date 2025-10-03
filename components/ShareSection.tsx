
import React, { useState, useEffect } from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const ShareButton: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 bg-slate-700 rounded-full text-slate-300 hover:text-white hover:bg-brand-accent transition-all duration-300"
    >
        {children}
    </a>
);


const ShareSection: React.FC = () => {
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        setPageUrl(window.location.href);
    }, []);

    const shareText = encodeURIComponent("Descubre 'El Valor de lo Desconocido': una red global para crear nuevos futuros.");
    const shareTitle = encodeURIComponent("El Valor de lo Desconocido");

    return (
        <section className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Divulga el Proyecto</h3>
            <p className="text-slate-300 mb-6">Ayúdanos a llegar a más personas con un solo clic.</p>
            <div className="flex justify-center items-center gap-4">
                <ShareButton href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}`} label="Share on Twitter">
                    <TwitterIcon className="w-6 h-6" />
                </ShareButton>
                <ShareButton href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} label="Share on Facebook">
                    <FacebookIcon className="w-6 h-6" />
                </ShareButton>
                <ShareButton href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${shareTitle}&summary=${shareText}`} label="Share on LinkedIn">
                    <LinkedInIcon className="w-6 h-6" />
                </ShareButton>
                <ShareButton href={`https://api.whatsapp.com/send?text=${shareText}%20${pageUrl}`} label="Share on WhatsApp">
                    <WhatsAppIcon className="w-6 h-6" />
                </ShareButton>
            </div>
        </section>
    );
};

export default ShareSection;
