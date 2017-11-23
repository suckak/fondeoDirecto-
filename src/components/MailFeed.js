import React, { Component } from 'react';
import { connect } from 'react-redux';

import {emailLists} from '../utils/constants';

class MailFeed extends Component {

    renderEmails(){
        let emails = [];
        switch (this.props.activeList){
            case emailLists.inbox:
                emails = this.props.inbox;
                break;
            case emailLists.trash:
                emails = this.props.trash;
                break;
            case emailLists.spam:
                emails = this.props.spam;
                break;
        }

        return (
            emails.map((email,index) => <li key={index}>{email.subject}</li>)
        );
    }

    render() {
        return(
            <div>
                <ul>
                    {this.renderEmails()}
                </ul>
            </div>
        );

    }
}

function mapStateToProps(state){
    return state.data;
}

export default connect(mapStateToProps)(MailFeed);
