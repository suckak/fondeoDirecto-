import React, { Component } from 'react';

class EmailItem extends Component {

    render() {
        const email = this.props.email;
        return(
            <div className="email">
                <p className="email--title">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                    {email.fromName}
                </p>
                <p className="email--subject">
                    {email.subject}
                </p>
                <p className="email--preview">
                    {email.body}
                </p>
            </div>
        );

    }
}

export default EmailItem;