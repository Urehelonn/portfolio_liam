import React from 'react';

import './project.style.scss';
import DATA from '../../assets/data';

const Project = (props) => {
    const { match: { params } } = props;
    const data = DATA.project[params.projectID];
    return (
        <div >
            <div className="container">
                <h1>{data.name.toUpperCase()}</h1>
                <div className='content'>
                    {data.content.map((ct, ind) => {
                        return (
                            <li key={ind}>{ct}</li>
                        );
                    })}
                </div>
                <hr />

                <img id="content_image" src={data.image} alt={data.image}></img>
            </div>
        </div>
    );
}

export default Project;