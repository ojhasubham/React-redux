import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { fetchComment } from '../actions';

class CommentListContainer extends Component {
    render() {
        return (
            <Comment {...this.props} />
        )
    }
}

export default connect(
    state => ({
        comment: state.CommentReducer.json
    }), {
        fetchComment
    }
)(CommentListContainer)