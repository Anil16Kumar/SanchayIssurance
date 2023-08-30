import React, { useState } from 'react'
import './HomeDashboard.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/Carousel2.jpg'
import img2 from '../../assets/carousel1.jpg'
import { Image } from 'react-bootstrap'

const HomeDashboard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='container'>
    <div className='header'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src={img1} fluid/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2} fluid/>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2} fluid/>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='content'></div>
    <div className='footer'></div>
    </div>
  )
}

export default HomeDashboard