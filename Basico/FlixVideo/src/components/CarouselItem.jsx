import React from 'react';
import '../assets/style/components/CarouselItems.scss'
import  playIcon from '../assets/static/play.png';
import playPlus from '../assets/static/plus.png';

const CarouselItems = () =>(
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="People"/>
        <div className="carousel-item__details">
            +
            <img src={playIcon} alt="Play"/>
            <img src={playPlus}  alt="Plus"/>
            <p className="carousel-item__details--title">Titulo descritivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>     
    </div>
);

export default CarouselItems;