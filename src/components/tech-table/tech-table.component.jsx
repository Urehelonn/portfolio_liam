import React from 'react';
import Table from 'react-bootstrap/Table';
import './tech-table.style.scss';

const TechTable = (props) => {
    const programming_language = [];
    props.data.programming_languages.forEach(e => {
        programming_language.push(<td>{e}</td>);
    });
    const front = [];
    props.data.front_end.forEach(e => {
        front.push(<td>{e}</td>);
    });
    const back = [];
    props.data.back_end.forEach(e => {
        back.push(<td>{e}</td>);
    });
    const database = [];
    props.data.database.forEach(e => {
        database.push(<td>{e}</td>);
    });
    const others = [];
    props.data.others.forEach(e => {
        others.push(<td>{e}</td>);
    });


    return (
        <div>
            <div className='tech_table_intro'>
                <h5>Here are some of the tech stacks I have used: </h5>
            </div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Programming Language</th>
                        {programming_language}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Front-end</th>
                        {front}
                    </tr>
                    <tr>
                        <th>Back-end</th>
                        {back}
                    </tr>
                    <tr>
                        <th>Database</th>
                        {database}
                    </tr>
                    <tr>
                        <th>Others</th>
                        {others}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default TechTable;