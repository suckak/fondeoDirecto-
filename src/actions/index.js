import { actionTypes } from "../utils/constants";

export const changeList = (id) => {
    return { type : actionTypes.CHANGE_LIST, payload : id };
};