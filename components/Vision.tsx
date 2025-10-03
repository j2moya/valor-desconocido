import React from 'react';

interface VisionContent {
  title: string;
  p1: string;
  p2: string;
}

const Vision: React.FC<{ content: VisionContent }> = ({ content }) => {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">{content.title}</h2>
      <div className="space-y-4 text-lg text-slate-300 leading-loose">
        <p>{content.p1}</p>
        <p>{content.p2}</p>
      </div>
    </section>
  );
};

export default Vision;
