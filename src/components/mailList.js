import React, { Component } from 'react';

import MailNav from '../containers/mailNav';
import MailFeed from '../containers/mailFeed';

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