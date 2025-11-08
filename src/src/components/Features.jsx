import React from 'react';
import FeatureCard from './FeatureCard';
export default function Features(){
  const items = [
    { title: 'Exclusive Events', desc: 'Curated experiences for members.' },
    { title: 'Private Network', desc: 'Connections with high-calibre peers.' },
    { title: 'Concierge Services', desc: 'White-glove support and access.' }
  ];
  return (
    <section style={{padding:'40px 0',textAlign:'center'}}>
      <div style={{display:'flex',gap:18,justifyContent:'center',flexWrap:'wrap'}}>
        {items.map((it,i)=> <FeatureCard key={i} title={it.title} desc={it.desc} />)}
      </div>
    </section>
  );
}
