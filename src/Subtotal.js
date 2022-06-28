import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Button } from "@mui/material"
import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [{basket}, dispatch] = useStateValue();
 
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Итого ({basket?.length} вещей): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Подарок включен к этому заказу
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"b.p"}
      />
    <button>
        Оформления Заказа
    </button> 
    </div>
  )
}

export default Subtotal