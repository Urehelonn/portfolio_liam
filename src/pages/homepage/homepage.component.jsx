import React from 'react';
import ImageHeader from '../../components/header-image/header-image.component';
import PageIndex from '../../components/page-index/page-index.component';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <ImageHeader></ImageHeader>
                <PageIndex></PageIndex>
            </div>
        );
    };
}