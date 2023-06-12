import axios from "axios"
import { setDateProducts } from "../action";

// const API_URL = "http://localhost:3000/api/tShirts/next"

export const getDataProductsNextMiddeleware = ({ API_URL, nextOffset, current }) => {
  return dispatch => axios.get(`${API_URL}/next?categoryId=${current}&length=6&offset=${nextOffset}`)
    .then(result => {
      dispatch(setDateProducts({ data: result.data.data, nextOffset: result.data.nextOffset, arrayLength: result.data.arrayLength }))
    });
}

