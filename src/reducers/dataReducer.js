import {emailLists} from '../utils/constants';
import {actionTypes} from "../utils/constants";

const mails = [{"id":0,"from":"mhallatt0@walmart.com","fromName":"M Hallatt","to":"cziem0@surveymonkey.com","subject":"Office Assistant IV","body":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis","date":"3/31/2017","isReaded":false,"avatar":"https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1","tag":"Indigo","attachements":[{"file":"http://dummyimage.com/250x250.jpg/5fa2dd/ffffff","name":"ut_nulla_sed.jpeg"}]},
    {"id":1,"from":"nmulbery1@seattletimes.com","fromName":"Mulbery","to":"idimont1@usa.gov","subject":"Technical Writer","body":"sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet","date":"11/17/2016","isReaded":false,"avatar":"https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1","tag":"Teal","attachements":[{"file":"http://dummyimage.com/250x250.jpg/dddddd/000000","name":"sodales_scelerisque_mauris.jpeg"}]}];

const INITIAL_STATE = {
    inbox : mails,
    trash : [],
    spam : [],
    activeList : emailLists.inbox,
    activeEmail : null
};


const dataReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        case actionTypes.CHANGE_LIST:
            return {
                ...state,
                activeList : action.payload
            };
            break;

        case actionTypes.SET_ACTIVE_EMAIL:
            return {
                ...state,
                inbox : state.inbox.map(email =>{
                    if(email.id === action.payload){
                        email.isReaded = true;
                    }
                    return email;
                }),
                activeEmail : mails.find(email => email.id === action.payload)
            };
            break;

        default:
            return state;
    }
};

export default dataReducer;