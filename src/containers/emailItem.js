import React, { Component } from 'react';

class EmailItem extends Component {

    render() {
        const email = this.props.email;
        const unread = email.isReaded ? null : <span className="unread"></span>;

        return(
            <div className="emailItem">
                {unread}
                <p className="emailItem--title">
                    <i className="fa fa-user-o" aria-hidden="true"></i>
                    {email.fromName}
                </p>
                <p className="emailItem--subject">
                    {email.subject}
                </p>
                <p className="emailItem--preview">
                    {email.body}
                </p>
            </div>
        );

    }
}

export default EmailItem;