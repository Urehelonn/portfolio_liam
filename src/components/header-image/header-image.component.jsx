import React from 'react';
import './header-image.style.scss';

class ImageHeader extends React.Component {
    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://source.unsplash.com/RCAhiGJsUUE/1920x1080" alt="Second slide"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="display-4">First Slide</h3>
                            <p className="lead">This is a description for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/wfh8dDlNFOk/1920x1080" alt="Second slide"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Part1</h5>
                            <p>aeifjkaserofigjaergierg.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/O7fzqFEfLlo/1920x1080" alt="Third slide"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Part1</h5>
                            <p>aeifjkaserofigjaergierg.</p>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    };
}

export default ImageHeader;