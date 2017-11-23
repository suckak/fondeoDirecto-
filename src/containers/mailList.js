import React, { Component } from 'react';

import MailNav from '../components/mailNav';
import MailFeed from '../components/mailFeed';

class MailList extends Component {

    render() {
        return(
            <div className="emailList">
                <MailNav/>
                <MailFeed/>
            </div>
        );

    }
}

export default MailList;