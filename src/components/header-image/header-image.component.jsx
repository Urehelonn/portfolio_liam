import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useHistory} from 'react-router-dom';
import './header-image.style.scss';

const ImageHeader = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    const history = useHistory();
    const carouselVal = [];
    props.data.project.forEach((e, ind) => {
        carouselVal.push(
            <Carousel.Item key={ind}>
                <img
                    className="d-block w-100"
                    src={e.title_image}
                    alt={e.name}
                    onClick={()=> history.push(e.path)}
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