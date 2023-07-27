import React from 'react';

// shared component import
import MainHeader from '@/components/header/index'

const Homepage = () => {

    return (
        <div>
            <h1>HomePage</h1>
            <MainHeader></MainHeader>
            {/*<ImageHeader*/}
            {/*    data={DATA}></ImageHeader>*/}
            {/*<div className='container intro'>*/}
            {/*    {DATA.introduction_paragraph}*/}
            {/*    <hr />*/}
            {/*    <br/>*/}
            {/*    <div>*/}
            {/*        {profile1}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <hr/>
            {/*<TechTable data={DATA}></TechTable>*/}

            {/*<PageIndex></PageIndex>*/}
        </div>
    );
}

export default Homepage;