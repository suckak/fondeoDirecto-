import React, { Component } from 'react';

import MailList from './mailList';
import MailContent from '../containers/mailContent';

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