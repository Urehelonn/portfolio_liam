import React from 'react';
import './page-index.style.scss';

export default class PageIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action active">
                        Cras justo odio
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                        Dapibus ac facilisis in</button>
                    <button type="button" className="list-group-item list-group-item-action">
                        Morbi leo risus</button>
                    <button type="button" className="list-group-item list-group-item-action">
                        Porta ac consectetur ac</button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>
                        Vestibulum at eros</button>
                </div>
            </div>
        );
    };
}