import React from 'react';
import './page-index.style.scss';
import { useHistory, Redirect } from 'react-router-dom';
import IndexItem from '../index-item/index-item.component';
import { DATA } from '../../assets/data';
import { render } from '@testing-library/react';

class PageIndex extends React.Component {
    state = { data: DATA };
    // let history = useHistory();
    // console.log("PageIndex prop: ");
    // console.log(props);
    // const routeChange = (path) => {
    //     history.push(path);
    // }
    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div className="container">
                <div className="list-group">
                    {data.project.map(({id, ...otherprops}) => {
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