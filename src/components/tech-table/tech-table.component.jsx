import React from 'react';
import Table from 'react-bootstrap/Table';
import './tech-table.style.scss';

const TechTable = (props) => {
    const programming_language = [];
    const data = props.data.tech_stacks; 
    data.programming_languages.forEach((e, ind) => {
        programming_language.push(<td key={ind}>{e}</td>);
    });
    const front = [];
    data.front_end.forEach((e, ind) => {
        front.push(<td key={ind}>{e}</td>);
    });
    const back = [];
    data.back_end.forEach((e, ind) => {
        back.push(<td key={ind}>{e}</td>);
    });
    const database = [];
    data.database.forEach((e, ind) => {
        database.push(<td key={ind}>{e}</td>);
    });
    const others = [];
    data.others.forEach((e, ind) => {
        others.push(<td key={ind}>{e}</td>);
    });

    const profile2 = [];
    props.data.profile2.forEach((e, ind) => {
        profile2.push(<li key={ind}>{e}</li>);
    });

    return (
        <div id="table_control">
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