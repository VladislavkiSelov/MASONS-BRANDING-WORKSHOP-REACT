import axios from "axios"
import { setDateProducts } from "../action";

// const API_URL = "http://localhost:3000/api/tShirts/ExpensiveCheap/Next"

export const getDataProductsFilterExpensiveCheapNextMiddeleware = ({ API_URL, nextOffset, current }) => {
    return dispatch => axios.get(`${API_URL}/ExpensiveCheap/Next?categoryId=${current}&length=6&offset=${nextOffset}`)
        .then(result => {
            dispatch(setDateProducts({ data: result.data.data, nextOffset: result.data.nextOffset, arrayLength: result.data.arrayLength }))
        });
}