import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

//Creating an array of Images

const data = [
  {
    name: 'Carousel Demo',
    image: '/images/1.jpg',
  },
  {
    name: 'Carousel Demo',
    image: '/images/2.jpg',
  },
  {
    name: 'Carousel Demo',
    image: '/images/3.jpg',
  },
  {
    name: 'Carousel Demo',
    image: '/images/4.jpg',
  },
  {
    name: 'Carousel Demo',
    image: '/images/5.jpg',
  },
];

export default function ProductCarousel() {
  return (
    <Carousel
      showAroows={true}
      autoPlay={true}
      Interval={3000}
      infiniteLoop={true}
      showThumbs={false}
    >
      {data.map((demo, index) => (
        <div key={index} className="carousel-items">
          <img src={demo.image} alt={demo.name} width={200} height={800} />
        </div>
      ))}
    </Carousel>
  );
}
