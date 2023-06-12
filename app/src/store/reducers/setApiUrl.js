import { API_URL } from "../action";

const defaultState = {
    url: ''
}

export const setApiUrl = function (state = defaultState, action) {
    switch (action.type) {
        case API_URL:
            return { url: action.payload }
        default:
            return state;
    }
}