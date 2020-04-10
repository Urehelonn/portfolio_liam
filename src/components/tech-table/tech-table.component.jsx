import React from 'react';
import Table from 'react-bootstrap/Table';
import './tech-table.style.scss';

const TechTable = (props) => {
    const programming_language = [];
    const data = props.data.tech_stacks; 
    data.programming_languages.forEach(e => {
        programming_language.push(<td>{e}</td>);
    });
    const front = [];
    data.front_end.forEach(e => {
        front.push(<td>{e}</td>);
    });
    const back = [];
    data.back_end.forEach(e => {
        back.push(<td>{e}</td>);
    });
    const database = [];
    data.database.forEach(e => {
        database.push(<td>{e}</td>);
    });
    const others = [];
    data.others.forEach(e => {
        others.push(<td>{e}</td>);
    });

    const profile2 = [];
    props.data.profile2.forEach(e => {
        profile2.push(<li>{e}</li>);
    });

    return (
        <div>
            <div className='tech_table_intro'>
                <div>
                    {profile2}
                </div>
                <br/>
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