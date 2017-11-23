import React, { Component } from 'react';

import MailList from '../containers/mailList';
import MailContent from './mailContent';

class App extends Component {

    render() {
        return(
            <div>
                <MailList/>
                <MailContent/>
            </div>
        );

    }
}


export default App;