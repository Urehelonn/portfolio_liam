import React from 'react';

import './project.style.scss';
import DATA from '../../assets/data';

const Project = (props) => {
    const { match: { params } } = props;
    const data = DATA.project[params.projectID];
    return (
        <div className='container'>
            <h1>{data.name.toUpperCase()}</h1>
            <div className='img-container'>
                <img src={data.image} alt={data.image}></img>
            </div>

            <div className='content'>
                {data.content.map((ct) => {
                    return (
                    <li>{ct}</li>
                    );
                })}
            </div>
            <hr/>
        </div>
    );
}

export default Project;