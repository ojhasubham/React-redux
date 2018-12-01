import React from 'react';
import NavBar from './Header';
import IncidentListContainer from '../containers/IncidentListContainer';
import AAAContainer from '../containers/AAAContainer';

const Main = () => (
    <div>
        <NavBar />
        <AAAContainer />
        {/* <IncidentListContainer /> */}
    </div>
)

export default Main;
