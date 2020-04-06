import React from 'react';
import { withRouter } from 'react-router-dom';
import './index-item.style.scss';

const IndexItem = ({ history, match, path, name, content }) => {
    return (
        <button type="button"
            className="list-group-item list-group-item-action"
            onClick={() => { history.push(`${match.url}${path}`) }}
        >
            {name}
            <div className="overflow_auto">{content}</div>
        </button>
    );
}

export default withRouter(IndexItem);
