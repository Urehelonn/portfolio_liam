import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './header-image-item.style.scss';

const HeaderImageItem = (props) => {

    return (
        <div>
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
        </div>
    );
}

export default HeaderImageItem;
