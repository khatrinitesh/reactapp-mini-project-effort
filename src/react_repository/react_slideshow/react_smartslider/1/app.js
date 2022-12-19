import React from 'react';
import SmartSlider from "react-smart-slider";

export default function CustomApp() {
  return (
    <div>
        <SmartSlider
        slides={slidesArray}
        buttonShape="square" // round or square
      />
    </div>
  )
}

const DummyCaption = ({ caption }) => (
    <div style={{
      position: 'absolute',
      right: 100,
      top: 250,
      fontSize: 38,
      padding: 55,
      border: 'solid 1px',
    }}>
      {caption}
    </div>
  )


  const slidesArray = [
    {
      url: "https://i.imgur.com/7u8i7L1.jpg",

      // (Optional) Set if you want to add any content on your slide
      childrenElem: <DummyCaption caption="Caption 1" />
    },
    {
      url: "https://i.imgur.com/E8gkF2f.jpg",
      childrenElem: <DummyCaption caption="Caption 2" />
    },
    {
      url: "https://i.imgur.com/t2a1zLi.jpg",
      childrenElem: <DummyCaption caption="Caption 3" />
    },
  ];