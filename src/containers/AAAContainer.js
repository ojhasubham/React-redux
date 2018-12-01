import React, { Component } from 'react';
import { connect } from 'react-redux';
import AAATable from '../components/AAATable';
import { fetchUsers } from '../actions';

class AAAListContainer extends Component {
    render() {
        return (
            <AAATable {...this.props} />
        )
    }
}

export default connect(
    state => ({
        AAAData: state.AAAReducer.json
    }), {
        fetchUsers
    }
)(AAAListContainer)