import React, { useState } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import ModalDelete from './ModalDelete';
import { setOrderBasket } from '../store/action';
import { useDispatch } from 'react-redux';
import { MinusOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';


export default function ElementOrderPageBasket({ order }) {
    const dispatch = useDispatch();
    const [activeModal, setActiveModal] = useState(false);

    function clickDelete() {
        setActiveModal(true)
    }

    const addNumberProduct = () => {
        dispatch(setOrderBasket({ ...order, number: 1 }))
    }

    const minusNumberProduct = () => {
        if (order.number <= 1) {
            return
        }
        dispatch(setOrderBasket({ ...order, number: 1, minus: true }))
    }
    return (
        <div className='order'>
            {activeModal === true && <ModalDelete order={order} setActiveModal={(value) => setActiveModal(value)} />}
            <div className='block_img_order'><img src={order.img} alt="#" /></div>
            <p className='name'>{order.name}</p>
            <div className='characteristics_order'>
                <p>Размер: {order.size}</p>
                <p>Цвет: {order.color}</p>
                <p>Количество товара: <MinusOutlined onClick={minusNumberProduct}></MinusOutlined> {order.number} <PlusOutlined onClick={addNumberProduct} /></p>
            </div>
            <p className='price'>{order.price * order.number}.00 грн</p>
            <CloseCircleOutlined onClick={clickDelete} className='btn_delete' />
        </div>
    )
}






































// import React, { useState } from 'react'
// import { CloseCircleOutlined } from '@ant-design/icons'
// import ModalDelete from './ModalDelete'
// import { setOrderBasket } from '../store/action'
// import { useDispatch } from 'react-redux'


// export default function ElementOrderPageBasket({ order }) {
//     const numberOrder = /^[1-9]{0,1}[0-9]{0,1}$/
//     const dispatch = useDispatch()
//     const [activeModal, setActiveModal] = useState(false)

//     function clickDelete() {
//         setActiveModal(true)
//     }

//     function handelNumberChange(e) {
//         if (!numberOrder.test(e.target.value)){
//             e.target.value = 1
//         }
//         dispatch(setOrderBasket({...order, number:e.target.value}))
//     }
//     return (
//         <div className='order'>
//             {activeModal === true && <ModalDelete order={order} setActiveModal={(value) => setActiveModal(value)} />}
//             <div className='block_img_order'><img src={order.img} alt="#" /></div>
//             <p className='name'>{order.name}</p>
//             <div className='characteristics_order'>
//                 <p>Размер: {order.size}</p>
//                 <p>Цвет: {order.color}</p>
//                 <p>Количество товара: <input type="text" value={order.number} onChange={handelNumberChange} /></p>
//             </div>
//             <p className='price'>{order.price*order.number}.00 грн</p>
//             <CloseCircleOutlined onClick={clickDelete} className='btn_delete' />
//         </div>
//     )
// }