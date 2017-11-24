import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {emailLists} from '../utils/constants';
import EmailItem from '../components/emailItem';
import {setActiveEmail,addEmails} from "../actions/index";

class MailFeed extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 2
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            const emailsToAdd = [
                {"id":this.state.counter,"from":"mhallatt0@walmart.com","fromName":"UNO","to":"cziem0@surveymonkey.com","subject":"Office Assistant IV","body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis","date":"3/31/2017","isReaded":false,"avatar":"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1","tag":"Indigo","attachements":[{"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff","name":"ut_nulla_sed.jpeg"}]},
                {"id":this.state.counter+1,"from":"nmulbery1@seattletimes.com","fromName":"Mulbery","to":"idimont1@usa.gov","subject":"Technical Writer","body":"sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet","date":"11/17/2016","isReaded":false,"avatar":"https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1","tag":"Teal","attachements":[{"file":"http://dummyimage.com/250x250.jpg/dddddd/000000","name":"sodales_scelerisque_mauris.jpeg"}]}
            ];
            this.setState({counter:this.state.counter+2});
            this.props.addEmails(emailsToAdd);
        },90000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    setActiveEmail(id){
        this.props.setActiveEmail(id);
    }

    renderEmails(){
        let emails = [];
        switch (this.props.activeList){
            case emailLists.inbox:
                emails = this.props.inbox;
                break;
            case emailLists.trash:
                emails = this.props.trash;
                break;
            case emailLists.spam:
                emails = this.props.spam;
                break;
        }
        return (
            emails.map((email,index) => <li key={index} onClick={()=>this.setActiveEmail(email.id)}>
                <EmailItem email={email} activeEmail={this.props.activeEmail}/>
            </li>)
        );
    }

    render() {
        return(
            <div>
                <ul className="emailFeed">
                    {this.renderEmails()}
                </ul>
            </div>
        );

    }
}

function mapStateToProps(state){
    return state.data;
}

function mapDispatchToProps(dispatch){
    return {
        setActiveEmail : bindActionCreators(setActiveEmail,dispatch),
        addEmails : bindActionCreators(addEmails,dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MailFeed);
