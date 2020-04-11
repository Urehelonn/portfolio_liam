import React from 'react';
import ImageHeader from '../../components/header-image/header-image.component';
import PageIndex from '../../components/page-index/page-index.component';
import DATA from '../../assets/data';

import './homepage.style.scss';
import TechTable from '../../components/tech-table/tech-table.component';

const Homepage = () => {

    const profile1 = [];
    DATA.profile1.forEach((e, ind) => {
        profile1.push(<li key={ind}>{e}</li>);
    });
    return (
        <div>
            <ImageHeader
                data={DATA}></ImageHeader>
            <div className='container intro'>
                {DATA.introduction_paragraph}
                <hr />
                <br/>
                <div>
                    {profile1}
                </div>
            </div>

            <hr />
            <TechTable data={DATA}></TechTable>

            <PageIndex></PageIndex>
        </div>
    );
}

export default Homepage;