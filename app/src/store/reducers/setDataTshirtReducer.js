import { SET_DATE_PRODUCTS } from "../action";

const defaultState = {
    data: [],
    nextOffset: 0,
    arrayLength: 0,
}

export const setDataProductsReducer = function (state = defaultState, action) {
    switch (action.type) {
        case SET_DATE_PRODUCTS:
            return {
                data: [...action.payload.data],
                nextOffset: action.payload.nextOffset,
                arrayLength: action.payload.arrayLength
            }
        default:
            return state;
    }
}