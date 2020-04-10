import React from 'react';

import './contact.style.scss';
import DATA from '../../assets/data';

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

                    <div>
                        Name: Lin Xu
                    </div>
                    <div>
                        Preferred Name: Liam
                    </div>
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
                            <img src={DATA.personal_info.fuzzy_img1} alt="My Fuzzy Friend" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
