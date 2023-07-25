import React from 'react';

import './contact.style.scss';
import DATA from '../../../assets/data';

const Contact = () => {
    return (
        <div className='container'>
            <h1>Contact Information</h1>
            <hr></hr>
            <div className='inner-container'>
                <div className='left'>
                    <div className='profile-img'>
                        <div className="spin-container">
                            <div className="shape">
                                <div className="bd"></div>
                            </div>
                        </div>
                    </div>

                    <h5>
                        Name: Lin Xu
                    </h5>
                    <h5>
                        Preferred Name: Liam
                    </h5>
                    <h5>
                        Primary Contact Method: Email (urehelonn@gmail.com)
                    </h5>
                    {/* <div className="extra">
                        <strong> *Yes my profile picture is Ruiner Nergigante from MH: World,
                            I forgot to draw the wings at the time, google it yourself, stop asking me D:
                        </strong>
                    </div> */}
                </div>
                <div className='right'>
                    <div className='content'>
                        <div>
                            GitHub Page: <a href={DATA.personal_info.github_page}>One of my favourite page with 'hub'.</a>
                        </div>
                        <div>
                            GitLab Page: <a href={DATA.personal_info.gitlab_page}>Lab Page, not much of work there.</a>
                        </div>
                        <div>
                            Location : {DATA.personal_info.location}
                        </div>
                        <div>
                            {DATA.personal_info.description}
                        </div>
                        <br />
                        <div>
                            <p>{DATA.personal_info.closure}</p>
                            （｡ò ∀ ó｡）!
                            <br />
                            <img src={DATA.personal_info.fuzzy_img1} alt="My Fuzzy Friend" />
                            <img src={DATA.personal_info.fuzzy_img2} alt="My Fuzzy Friend" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
