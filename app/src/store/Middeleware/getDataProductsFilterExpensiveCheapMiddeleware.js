
import axios from "axios"
import { setDateProducts } from "../action";

const API_URL = "http://localhost:3000/api/tShirts/ExpensiveCheap"

export const getDataProductsFilterExpensiveCheapMiddeleware = ({ API_URL, current}) => {
    return dispatch => axios.get(`${API_URL}/ExpensiveCheap?categoryId=${current}&length=6&offset=${0}`)
        .then(result => {
            dispatch(setDateProducts({ data: result.data.data, nextOffset: result.data.nextOffset, arrayLength: result.data.arrayLength }))
        });
}
