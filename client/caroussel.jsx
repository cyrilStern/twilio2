import React from 'react';
import {Carousel} from 'react-bootstrap';

// define and export our Layout component
export const carouselInstance = (


  <Carousel className="carousel">
    <Carousel.Item>
        <img  width={1350} height={750}  src="http://www.fitnessruns.com/wp-content/uploads/2015/05/attachment_1442006640.png"/>
      <Carousel.Caption>
        <h3>Pour l endurance</h3>
        <p>Rien de mieux que nos produits</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1350} height={750}  src="http://t.wallpaperweb.org/wallpaper/sport/1920x1080/mountainsports1920x1080wallpaper2611.jpg"/>
      <Carousel.Caption>
        <h3>Apprenez à vous connaitre</h3>
        <p>Une large gamme d équipement.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={1350} height={750} src="images/balance.jpg"/>
      <Carousel.Caption>
        <h3>Suivez votre progression</h3>
        <p>Une fiabilité à toute épreuve.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
