import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000" onDragStart={handleDragStart} role="presentation" />,
  ];
  

export default function One() {
  return (
    <div>
        <AliceCarousel mouseTracking items={items} />
    </div>
  )
}
