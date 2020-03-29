import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './header-image.style.scss';

function ImageHeader() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>First slide label</h2>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/wfh8dDlNFOk/1920x1080"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Second slide label</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/O7fzqFEfLlo/1920x1080"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>Third slide label</h2>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageHeader;