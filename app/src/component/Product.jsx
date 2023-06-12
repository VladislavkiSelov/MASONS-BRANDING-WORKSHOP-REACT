import React from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Product({ name, price, url, id }) {
    const navigate = useNavigate();
    const params = useParams();
    const current = params.categoryId;

    const handelCkick = (id) => {
        navigate(`/category/${current}/${id}`)
    }

    return (
        <div className='card' onClick={() => handelCkick(id)}>
            <div className='img_card'><img src={url} alt="#" /></div>
            <p>{name}</p>
            <p className='price'>{price}₴</p>
        </div>
    )
}
