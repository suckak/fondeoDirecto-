import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EmailActions from '../containers/emailActions';
import {deleteEmail,markAsSpam,unreadEmail} from "../actions/index";
import {formatFullDate} from "../utils/utils";

class MailContent extends Component {

    renderEmail(email){
        if(email){

            const emailActions = {
                delete : this.props.deleteEmail.bind(this,email),
                markAsSpam : this.props.markAsSpam.bind(this,email),
                unread : this.props.unreadEmail.bind(this,email.id)
            };

            return(
                <div>
                    <p className="emailContent--subject">
                        {email.subject}
                        <EmailActions {...emailActions}/>
                    </p>
                    <div className="emailBack">
                        <div className="emailHead">
                            <p className="emailHead--from">
                                {email.fromName} &nbsp;
                                <a href={`mailto:${email.from}`}>
                                    {`<${email.from}>`}
                                </a>
                                <span className="emailHead--date">
                                {formatFullDate(email.date)}
                            </span>
                            </p>

                        </div>
                        <p>{email.body}</p>
                    </div>
                </div>
            );
        }else{
            return(
                <i className="fa fa-envelope-o envelope" aria-hidden="true"></i>
            );
        }
    }

    render() {
        const email = this.props.email;

        return(
            <div className="emailContent">
                {this.renderEmail(email)}
            </div>
        );

    }
}

function mapStateToProps(state){
    return {
        email : state.data.activeEmail
    };
}

function mapDispatchToProps(dispatch){
    return {
        deleteEmail : bindActionCreators(deleteEmail,dispatch),
        markAsSpam : bindActionCreators(markAsSpam,dispatch),
        unreadEmail : bindActionCreators(unreadEmail,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MailContent);