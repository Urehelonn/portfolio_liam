import React from 'react';
import { withRouter } from 'react-router-dom';

const IndexItem = ({ history, match, path, name, content }) => {
    return (
        <button type="button"
            className="list-group-item list-group-item-action"
            onClick={() => { history.push(`${match.url}${path}`) }}
        >
            {name}
            <div>{content}</div>
        </button>
    );
}

export default withRouter(IndexItem);
