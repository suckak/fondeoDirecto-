import React, { Component } from 'react';

import {formatDate} from '../utils/utils';

class EmailItem extends Component {

    emailItemClass(email){
        if(this.props.activeEmail){
            return email.id === this.props.activeEmail.id ? "emailItem emailItem__selected" : 'emailItem';
        }else{
            return 'emailItem';
        }

    }


    render() {
        const email = this.props.email;
        const unread = email.isReaded ? <span className="unread__blank"></span> : <span className="unread"></span>;

        return(
            <div className={this.emailItemClass(email)}>
                {unread}
                <div className="emailItem--right">
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
                    <span className="EmailItem--date">
                        {formatDate(email.date)}
                    </span>
                </div>
            </div>
        );

    }
}

export default EmailItem;