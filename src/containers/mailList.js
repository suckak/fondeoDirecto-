import React, { Component } from 'react';

import MailNav from '../components/mailNav';
import MailFeed from '../components/mailFeed';

class MailList extends Component {

    render() {
        return(
            <div>
                <MailNav/>
                <MailFeed/>
            </div>
        );

    }
}

export default MailList;