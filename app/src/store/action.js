export const SET_DATE_PRODUCTS = "SET_DATE_PRODUCTS"
export const setDateProducts = data => ({ type: SET_DATE_PRODUCTS, payload: data})

export const GET_SELECTED_ID_CARD = "GET_SELECTED_ID_CARD"
export const setSelectedCard = card => ({ type: GET_SELECTED_ID_CARD, payload: card})

export const ADD_ORDER_BASKET = "ADD_ORDER_BASKET"
export const setOrderBasket = order => ({ type: ADD_ORDER_BASKET, payload: order})

export const DELETE_ORDER_BASKET = "DELETE_ORDER_BASKET"
export const deleteOrderBasket = order => ({ type: DELETE_ORDER_BASKET, payload: order})

export const CLEAR_BASKET = "CLEAR_BASKET"
export const clearBasket = () => ({ type: CLEAR_BASKET})

export const API_URL = "API_URL"
export const sendURL = (url) => ({ type: API_URL, payload: url})

