import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {changeList} from "../actions/index";
import {emailLists} from "../utils/constants";

class MailNav extends Component {

    constructor(props){
        super(props);

        this.isSelected = this.isSelected.bind(this);
    }

    changeList(id){
        this.props.changeList(id);
    }

    isSelected(value){
        return this.props.currentList === value ? 'emailNav--option emailNav--option__selected' : 'emailNav--option';
    }

    render() {
        return(
            <div>
                <nav className="emailNav">
                    <ul>
                        <li className={this.isSelected(emailLists.inbox)} onClick={()=>this.changeList(emailLists.inbox)}>
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            Inbox
                        </li>
                        <li className={this.isSelected(emailLists.trash)} onClick={()=>this.changeList(emailLists.trash)}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                            Trash
                        </li>
                        <li className={this.isSelected(emailLists.spam)} onClick={()=>this.changeList(emailLists.spam)}>
                            <i className="fa fa-microchip" aria-hidden="true"></i>
                            Spam
                        </li>
                    </ul>
                </nav>
            </div>
        );

    }
}

function mapStateToProps(state){
    return {
        currentList : state.data.activeList
    };
}

function mapDispatchToProps(dispatch){
    return {
        changeList : bindActionCreators(changeList,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MailNav);