import React, { Component } from 'react';
import { connect } from 'react-redux';
import Incident from '../components/Incident';
import { fetchIncidents } from '../actions';

class IncidentListContainer extends Component {
    render() {
        return (
            <Incident {...this.props} />
        )
    }
}

export default connect(
    state => ({
        incident: state.IncidentReducer.json
    }), {
        fetchIncidents
    }
)(IncidentListContainer)