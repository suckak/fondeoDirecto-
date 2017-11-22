import React, { Component } from 'react';
import { connect } from 'react-redux';

class MailNav extends Component {

    render() {
        return(
            <div>
                <nav>
                    <ul>
                        <li>inbox</li>
                        <li>trash</li>
                        <li>span</li>
                    </ul>
                </nav>
            </div>
        );

    }
}


export default MailNav;