import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';

interface IntroductionContent {
  p1_part1: string;
  p1_part2: string;
  p1_part3: string;
  p1_part4: string;
  p1_part5: string;
  p1_part6: string;
  p1_part7: string;
}

const Introduction: React.FC<{ content: IntroductionContent }> = ({ content }) => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-shrink-0">
        <GlobeIcon className="w-32 h-32 md:w-40 md:h-40 text-brand-accent" />
      </div>
      <div className="text-xl md:text-2xl text-slate-200 leading-relaxed text-center md:text-left">
        <p>
          {content.p1_part1}
          <span className="font-bold text-white">{content.p1_part2}</span>
          {content.p1_part3}
          <span className="font-bold text-white">{content.p1_part4}</span>
          {content.p1_part5}
          <span className="font-bold text-white italic">{content.p1_part6}</span>
          {content.p1_part7}
        </p>
      </div>
    </section>
  );
};

export default Introduction;
