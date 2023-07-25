import React from 'react';
import './page-index.style.scss';
import IndexItem from '../index-item/index-item.component';
import { DATA } from '../../../assets/data';

class PageIndex extends React.Component {
    state = { data: DATA };
    render() {
        const { data } = this.state;
        return (
            <div className="container">
                <div className="list-group">
                    {data.project.map(({ id, ...otherprops }) => {
                        return (
                            <IndexItem key={id} {...otherprops}></IndexItem>
                        );
                    })}
                </div>
            </div>
        );
    };
}

export default PageIndex;