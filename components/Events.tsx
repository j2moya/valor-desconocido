import React from 'react';

interface EventItemProps {
  title: string;
  description: string;
}

interface EventsContent {
  title: string;
  items: EventItemProps[];
}

const EventItem: React.FC<EventItemProps> = ({ title, description }) => (
  <li className="border-l-4 border-brand-accent pl-6 py-3 transition-all duration-300 hover:bg-slate-800/50">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-300 mt-1">{description}</p>
  </li>
);

const Events: React.FC<{ content: EventsContent }> = ({ content }) => {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">{content.title}</h2>
      <ul className="space-y-6">
        {content.items.map((item, index) => (
          <EventItem key={index} title={item.title} description={item.description} />
        ))}
      </ul>
    </section>
  );
};

export default Events;
