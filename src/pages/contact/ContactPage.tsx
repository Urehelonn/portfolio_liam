import React from 'react';
import NavBar from "@/components/navbar";

const Contact = () => {
    const name = 'Lin Xu';
    const preferredName = 'Liam';
    const email = 'urehelonn@gmail.com';
    return (
        <div className='container'>
            <h1>Contact Information</h1>
            <NavBar></NavBar>
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
                        Name: {name}
                    </h5>
                    <h5>
                        Preferred Name: {preferredName}
                    </h5>
                    <h5>
                        Primary Contact Method: {email}
                    </h5>
                </div>
                <div className='right'>
                    <div className='content'>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
