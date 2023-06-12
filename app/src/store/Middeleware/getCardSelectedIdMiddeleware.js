import axios from "axios"
import { setSelectedCard } from "../action";


export const getCardSelectedIdMiddeleware = ({id, API_URL, current}) => {
  return dispatch => axios.get(`${API_URL}/${id}/?categoryId=${current}`)
    .then(result => {
      dispatch(setSelectedCard(result.data))
    });
}