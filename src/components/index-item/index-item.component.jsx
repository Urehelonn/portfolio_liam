import React from 'react';
import { withRouter } from 'react-router-dom';
import './index-item.style.scss';

const IndexItem = (props) => {
    return (
        <button type="button"
            className="list-group-item list-group-item-action"
            onClick={() => { props.history.push(`${props.match.url}${props.path}`) }}
        >
            <b>{props.name}</b>
            <div className="overflow_auto">{props.description}</div>
            <div className="index-item-stacks-display">
                <b>Mainly Using: {props.stacks}</b>
            </div>
        </button>
    );
}

export default withRouter(IndexItem);
