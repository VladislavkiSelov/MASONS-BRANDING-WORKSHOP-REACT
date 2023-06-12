
import axios from "axios"
import { setDateProducts } from "../action";



export const getDataProductsFilterCheapExpensiveMiddeleware = ({ API_URL, current }) => {
  return dispatch => axios.get(`${API_URL}/CheapExpensive?categoryId=${current}&length=6&offset=${0}`)
    .then(result => {
      console.log(result);
      dispatch(setDateProducts({data:result.data.data, nextOffset:result.data.nextOffset, arrayLength: result.data.arrayLength }))
    });
}