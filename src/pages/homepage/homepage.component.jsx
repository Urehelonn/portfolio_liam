import React from 'react';
import ImageHeader from '../../components/header-image/header-image.component';
import PageIndex from '../../components/page-index/page-index.component';
import DATA from '../../assets/data';

import './homepage.style.scss';
import TechTable from '../../components/tech-table/tech-table.component';

const Homepage = () => {

    const profile = [];
    DATA.profile.forEach(e => {
        profile.push(<li>{e}</li>);
    });
    return (
        <div>
            <ImageHeader
                data={DATA}></ImageHeader>
            <div className='container intro'>
                {DATA.introduction_paragraph}
                <hr />
                <div>
                    {profile}
                </div>
            </div>

            <hr />
            <TechTable data={DATA.tech_stacks}></TechTable>

            <PageIndex></PageIndex>
        </div>
    );
}

export default Homepage;