import React from 'react'
import { deleteOrderBasket } from '../store/action'
import { useDispatch } from 'react-redux'

export default function ModalDelete({ order, setActiveModal }) {
    const dispatch = useDispatch()
    function deleteYes() {
        dispatch(deleteOrderBasket(order))
        setActiveModal(false)
    }
    return (
        <div className="box_modal">
            <div className="modal">
                <p>Ты реально хочешь удалить этот товар?</p>
                <div className="btn_box_modal">
                    <button type="button" onClick={() => { setActiveModal(false) }} >Нет</button>
                    <button type="button" onClick={() => { deleteYes() }}>Да</button>
                </div>
            </div>
        </div>
    )
}
