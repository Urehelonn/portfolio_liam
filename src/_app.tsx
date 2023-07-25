import React from 'react';

import './_app.scss';
import HomePage from "@/pages/homepage/HomePage";

const Home = () => (
    <div className="App">
        <HomePage/>
        {/*<Header/>*/}
        {/*<Switch>*/}
        {/*    <Route exact path="/"*/}
        {/*           component={Homepage}*/}
        {/*    />*/}
        {/*    <Route exact path="/about"*/}
        {/*           component={About}*/}
        {/*    />*/}
        {/*    <Route path="/project/:projectID" component={Project}>*/}
        {/*    </Route>*/}

        {/*    <Route path="/contact" component={Contact}>*/}
        {/*    </Route>*/}
        {/*</Switch>*/}
    </div>
);

export default Home;