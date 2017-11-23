import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {emailLists} from '../utils/constants';
import EmailItem from '../containers/emailItem';
import {setActiveEmail} from "../actions/index";

class MailFeed extends Component {

    setActiveEmail(id){
        this.props.setActiveEmail(id);
    }

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
            emails.map((email,index) => <li key={index} onClick={()=>this.setActiveEmail(email.id)}>
                <EmailItem email={email}/>
            </li>)
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

function mapDispatchToProps(dispatch){
    return {
        setActiveEmail : bindActionCreators(setActiveEmail,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MailFeed);
