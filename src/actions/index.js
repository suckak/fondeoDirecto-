import { actionTypes } from "../utils/constants";

export const changeList = (id) => {
    return { type : actionTypes.CHANGE_LIST, payload : id };
};

export const setActiveEmail = (id) => {
    return { type : actionTypes.SET_ACTIVE_EMAIL, payload : id };
};