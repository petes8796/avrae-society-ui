import React from 'react';
export default function FeatureCard({title,desc}){
  return (
    <div style={{
      background:'#0b0b0b',
      padding:20,
      borderRadius:8,
      minWidth:220,
      boxShadow:'0 6px 18px rgba(0,0,0,0.6)'
    }}>
      <h3 style={{margin:'0 0 8px'}}>{title}</h3>
      <p style={{margin:0,color:'#9aa0a6'}}>{desc}</p>
    </div>
  );
}
