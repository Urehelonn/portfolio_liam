import React from 'react';

export default function About() {
    return (
        <div className='container about'>
            <h1>About This Portfolio</h1>
            <br />
            <h4>This web page is used to demonstrate some of my work, and introduce
                    with some of the projects I worked with for my previous position.</h4>
            <p>Created using React.js</p>
            <br />
            <div>Repo for this page: <a href="https://github.com/Urehelonn/portfolio_liam">Visit Liam's Github</a>
            </div>
            <hr />

            <div className="section">
                <h2>Portfolio Design</h2>

                <h3>Explanation</h3>
                <ul>
                    <li>To learn and practice with React,
                        I chose to use React to create this portfolio.</li>
                    <li>This will be a static SPA with no backend.</li>
                    <li>Bootstrap will be used to make this portfolio
                        looks nicer.</li>
                    <li>Home page will be some general information about
                        myself, or another word, my resume. The home page
                        will also provide an index for all the different projects.</li>

                    <li>There will not be page to demonstrate projects
                        directly since there's no project maintained. There will
                        be only introducing some of the structures, or function
                        explanation.</li>

                    <li>For the projects I worked with in my previous job,
                        since I have no right to leak the code, I will only
                        explain some of the features.</li>
                </ul>

                <h3>Design &amp; Structure</h3>

                <ul>
                    <li><strong>Homepage</strong>:
                     With an index which leads to pages to show some of the
                     main projects I created.</li>

                    <li><strong>Header</strong>:
                     Has some buttons for navigation, includes [ <em>Main Page</em>, <em>About</em>, <em>Contact Me</em> ]</li>

                    <li><strong>Project Page</strong>:
                     Has at least one picture, followed by a brief explanation, such as
                     technology stacks used. Public projects will provide the link(s) to the repository.</li>

                    <li><strong>About Page</strong>:
                     Will provide development diary (this readme file), and all the source,
                     including readme + github repo.</li>
                </ul>

                <h3 id="sourcecontrolworkflow">Source Control &amp; Workflow</h3>

                <ul>
                    <li>Since this is a personal project, I will commit most onto the master
                        branch, unless bumping onto some major bug.</li>

                    <li>Due to the design I have got now is too simple, Agile will not be used
                        (it is too strict for one-person-team as well), Extreme Programming methodology
                        will be used for me to create this project. A new task will be created and
                        finished (I suppose) on a daily bases. </li>
                </ul>

            </div>
            <hr />
            <div className="section">
                <h2>Development Track</h2>
                <br />
                <p>==== This Part Will Be Displayed After ===</p>
            </div>
            <h1>THIS WEB APPLICATION IS STILL IN PROGRESS OF DEVELOPING</h1>

            <br />
            <br />
            <p>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.</p>
        </div>
    );
}