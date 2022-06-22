import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";


import {
  Link
} from "react-router-dom";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  
  return (
    <div className='checkout'>
        <div className='checkout__left'>
          <Link onClick={() => window.location.href="/"}>
            <img className='checkout__ad' src="https://images.unsplash.com/photo-1505502768156-98c787d2190e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2635&q=80"  alt=''/>
          </Link>

          <div>
            <h2 className='checkout__title'>
              Ваша Корзина Покупок

              {/* BasketItem*/}
              {/* BasketItem*/}
              {/* BasketItem*/}
              {/* BasketItem*/}
              {/* BasketItem*/}
            </h2>
          </div>
        </div>

        <div>
          <h2 className='checkout__right'>
            <Subtotal />
          </h2>
        </div>
    </div>
  )
}

export default Checkout