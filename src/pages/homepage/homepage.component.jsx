import React from 'react';
import ImageHeader from '../../components/header-image/header-image.component';
import PageIndex from '../../components/page-index/page-index.component';
import DATA from '../../assets/data';

import './homepage.style.scss';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <ImageHeader></ImageHeader>
                <div className='container intro'>
                    {DATA.introduction_paragraph}
                </div>
                <PageIndex></PageIndex>
            </div>
        );
    };
}