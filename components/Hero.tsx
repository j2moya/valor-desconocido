import React from 'react';

interface HeroContent {
  titleLine1: string;
  titleLine2: string;
}

const Hero: React.FC<{ content: HeroContent }> = ({ content }) => {
  return (
    <section className="text-center my-8">
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-none">
        {content.titleLine1} <br /> {content.titleLine2}
      </h1>
    </section>
  );
};

export default Hero;
