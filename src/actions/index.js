import { actionTypes } from "../utils/constants";

export const changeList = (id) => {
    return { type : actionTypes.CHANGE_LIST, payload : id };
};

export const setActiveEmail = (id) => {
    return { type : actionTypes.SET_ACTIVE_EMAIL, payload : id };
};

export const deleteEmail = (email) => {
    return { type : actionTypes.DELETE_EMAIL, payload : email };
};

export const markAsSpam = (email) => {
    return { type : actionTypes.MARK_AS_SPAM, payload : email };
};

export const unreadEmail = (id) => {
    return { type : actionTypes.UNREAD_EMAIL, payload : id };
};