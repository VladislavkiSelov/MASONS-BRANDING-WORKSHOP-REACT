import axios from "axios"
import { setDateProducts } from "../action";

// const API_URL = "http://localhost:3000/api/tShirts/CheapExpensive/Prev"

export const getDataProductsFilterCheapExpensivePrevMiddeleware = ({ API_URL, nextOffset, current }) => {
  return dispatch => axios.get(`${API_URL}/CheapExpensive/Prev?categoryId=${current}&length=6&offset=${nextOffset}`)
    .then(result => {
      dispatch(setDateProducts({ data: result.data.data, nextOffset: result.data.nextOffset, arrayLength: result.data.arrayLength }))
    });
}