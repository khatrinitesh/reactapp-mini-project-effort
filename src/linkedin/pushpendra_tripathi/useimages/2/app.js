import React from 'react';

export const Images = {
    Logo :require('./img1.jpg'),
    Home :require('./img2.png'),
    About :require('./img2.png'),
}

let imgs = [
    'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
    'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
  ];

export default function CustomApp() {
  return (
    <div>
        <img src={Images.Logo}/>
        <br/>
        <img src={Images.Home}/>
        <br/>
        <img src={Images.About}/>
    </div>
  )
}



