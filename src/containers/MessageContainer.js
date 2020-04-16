import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import * as Message from './../constants/Message';
import Message from './../components/Message';


class MessageContainer extends Component {
    render() {
        let { message } = this.props;
        return(
            <Message message = { message }/>
        )                        
    }
}

MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message       
    }
}

// Chuyển State từ Store thành Props cho Components

export default connect(mapStateToProps,null)(MessageContainer);