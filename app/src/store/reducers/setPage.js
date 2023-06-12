import { PAGE } from "../action";

const defaultState = {
    page: ''
}

export const setPage = function (state = defaultState, action) {
    switch (action.type) {
        case PAGE:
            return { page: action.payload }
        default:
            return state;
    }
}