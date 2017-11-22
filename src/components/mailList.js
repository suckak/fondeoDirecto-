import React, { Component } from 'react';
import { connect } from 'react-redux';

import MailNav from './mailNav';
import MailFeed from '../components/MailFeed';

class MailList extends Component {

    render() {
        return(
            <div>
                <MailNav/>
                <MailFeed mails={this.props.inbox} />
            </div>
        );

    }
}

function mapStateToProps(state){
    return state.data;
}

export default connect(mapStateToProps)(MailList);