import React, { Component } from 'react';
import { connect } from 'react-redux';

class MailContent extends Component {

    renderEmail(email){
        if(email){
            return(
                <div>
                    <p className="emailContent--subject">
                        {email.subject}
                    </p>
                    <div>
                        <div className="emailHead">
                            <p className="emailHead--from">
                                {email.fromName} &nbsp;
                                <a href={`mailto:${email.from}`}>
                                    {`<${email.from}>`}
                                </a>
                            </p>
                            <p className="emailHead--date">
                                {email.date}
                            </p>
                        </div>
                        <p>{email.body}</p>
                    </div>
                </div>
            );
        }else{
            return(
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
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

export default connect(mapStateToProps)(MailContent);