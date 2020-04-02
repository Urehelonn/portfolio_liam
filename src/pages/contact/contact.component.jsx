import React from 'react';

import './contact.style.scss';

const Contact = (props) => {
    return (
        <div className='container'>
            <h1>Contact Information</h1>
            <hr></hr>
            <div className='inner-container'>
                <div className='left'>
                    <div className='profile-img'>
                        <div class="spin-container">
                            <div class="shape">
                                <div class="bd"></div>
                            </div>
                        </div>
                    </div>

                    <p>
                        Name: aerfaer
                    </p>
                    <p>
                        Preferred Name: asfae
                    </p>
                </div>
                <div className='right'>
                    <div className='content'>
                        <p>
                            GitHub Page: aerfaer
                        </p>
                        <p>
                            GitLab Page: aerfaer
                        </p>
                        <p>
                           Location : aerfaer
                        </p>
                        <p>
                            Description aerfaer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
