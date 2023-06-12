import { GET_SELECTED_ID_CARD } from "../action";

const defaultState = {
    data: {}
}

export const setCardSelectedIReducer = function (state = defaultState, action) {
    switch (action.type) {
        case GET_SELECTED_ID_CARD:
            return { data: { ...action.payload } }
        default:
            return state;
    }
}