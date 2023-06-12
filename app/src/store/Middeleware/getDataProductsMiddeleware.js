import axios from "axios"
import { setDateProducts } from "../action";

export const getDataProductsMiddeleware = ({ API_URL, current }) => {
  return dispatch => axios.get(`${API_URL}/?categoryId=${current}&length=6&offset=${0}`)
    .then(result => {
      dispatch(setDateProducts({ data: result.data.data, nextOffset: result.data.nextOffset, arrayLength: result.data.arrayLength }))
    });
}


