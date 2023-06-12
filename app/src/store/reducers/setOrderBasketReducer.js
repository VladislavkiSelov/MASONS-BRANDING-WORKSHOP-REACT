import { ADD_ORDER_BASKET } from "../action";
import { DELETE_ORDER_BASKET } from "../action";
import { CLEAR_BASKET } from "../action";

const defaultState = {
    orders: []
}

export const setOrderBasketReducer = function (state = defaultState, action) {
    let status = false
    switch (action.type) {
        case ADD_ORDER_BASKET:
            let b = state.orders.map((item) => {
                if (action.payload.id === item.id && action.payload.color === item.color && action.payload.size === item.size) {
                    status = true
                    if(action.payload.minus !== true){
                        item.number = action.payload.number + item.number
                    }else{
                        item.number =  item.number - action.payload.number 
                    }
                }
                return item
            })
            if (status === true) {
                return { orders: [...b] }
            } else {
                return { orders: [...state.orders, action.payload] }
            }

        case DELETE_ORDER_BASKET:
            let resultDelete = state.orders.filter(item => {
                return action.payload.id !== item.id || action.payload.color !== item.color || action.payload.size !== item.size
            })
            return { orders: [...resultDelete] }

            case CLEAR_BASKET:
                return { orders: [] }
        default:
            return state;
    }
}