import React, { useState, useEffect } from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ShareSectionContent {
    title: string;
    subtitle: string;
    shareText: string;
    shareTitle: string;
    ariaLabels: {
        twitter: string;
        facebook: string;
        linkedin: string;
        whatsapp: string;
    };
}

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


const ShareSection: React.FC<{ content: ShareSectionContent }> = ({ content }) => {
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        setPageUrl(window.location.href);
    }, []);

    const shareText = encodeURIComponent(content.shareText);
    const shareTitle = encodeURIComponent(content.shareTitle);

    return (
        <section className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{content.title}</h3>
            <p className="text-slate-300 mb-6">{content.subtitle}</p>
            <div className="flex justify-center items-center gap-4">
                <ShareButton href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${shareText}`} label={content.ariaLabels.twitter}>
                    <TwitterIcon className="w-6 h-6" />
                </ShareButton>
                <ShareButton href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`} label={content.ariaLabels.facebook}>
                    <FacebookIcon className="w-6 h-6" />
                </ShareButton>
                <ShareButton href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${shareTitle}&summary=${shareText}`} label={content.ariaLabels.linkedin}>
                    <LinkedInIcon className="w-6 h-6" />
                </ShareButton>
                <ShareButton href={`https://api.whatsapp.com/send?text=${shareText}%20${pageUrl}`} label={content.ariaLabels.whatsapp}>
                    <WhatsAppIcon className="w-6 h-6" />
                </ShareButton>
            </div>
        </section>
    );
};

export default ShareSection;
