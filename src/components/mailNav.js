import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {changeList} from "../actions/index";
import {emailLists} from "../utils/constants";

class MailNav extends Component {

    constructor(props){
        super(props);
    }

    changeList(id){
        this.props.changeList(id);
    }

    render() {
        return(
            <div>
                <nav>
                    <ul>
                        <li onClick={()=>this.changeList(emailLists.inbox)}>inbox</li>
                        <li onClick={()=>this.changeList(emailLists.trash)}>trash</li>
                        <li onClick={()=>this.changeList(emailLists.spam)}>spam</li>
                    </ul>
                </nav>
            </div>
        );

    }
}

function mapDispatchToProps(dispatch){
    return {
        changeList : bindActionCreators(changeList,dispatch)
    };
}

export default connect(null,mapDispatchToProps)(MailNav);