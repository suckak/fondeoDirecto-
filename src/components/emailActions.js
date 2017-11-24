import React, { Component } from 'react';

class EmailActions extends Component {

    render() {

        return(
            <span className="emailActions">
                <i className="fa fa-circle" aria-hidden="true" onClick={this.props.unread}></i>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.props.delete}></i>
                <i className="fa fa-microchip" aria-hidden="true" onClick={this.props.markAsSpam}></i>
            </span>
        );

    }
}

export default EmailActions;