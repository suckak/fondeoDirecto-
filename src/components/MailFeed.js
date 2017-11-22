import React, { Component } from 'react';

class MailFeed extends Component {

    renderMails(){
        const mails = this.props.mails;

        return (
            mails.map((mail,index) => <li key={index}>{mail.subject}</li>)
        );
    }

    render() {
        return(
            <div>
                <ul>
                    {this.renderMails()}
                </ul>
            </div>
        );

    }
}


export default MailFeed;