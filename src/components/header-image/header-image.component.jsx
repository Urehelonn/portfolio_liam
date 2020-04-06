import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './header-image.style.scss';

function ImageHeader(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    const carouselVal = [];
    props.data.project.forEach((e, ind) => {
        carouselVal.push(
            <Carousel.Item key={ind}>
                <img
                    className="d-block w-100"
                    src={e.image}
                    alt={e.name}
                />
                <Carousel.Caption>
                    <h2>{e.name}</h2>
                    <p>{e.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {carouselVal}
        </Carousel>
    );
}

export default ImageHeader;