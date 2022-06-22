import React from 'react'
import './Card.css'
import { Button } from "@mui/material"
import {useStateValue} from './StateProvider';
function Card({ image, title, description, price }) {

    const [{basket}, dispatch] = useStateValue();


    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            image: image,
            title: title,
            description: description,
            price: price,
          },
        });
      };

    return (
        <div className='card'>
            <img src={image} alt=""/>
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>

            <Button onClick={addToBasket}>Добавить в Корзину</Button>
        </div>
    )
}

export default Card