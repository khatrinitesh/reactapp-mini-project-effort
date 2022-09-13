import React from 'react';
import Card from './card';

export default function Hero({data}) {
  return (
    <section className='hero'>
        <Card data={data}/>
    </section>
  )
}
