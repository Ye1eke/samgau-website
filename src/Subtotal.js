import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { Button } from "@mui/material"
import {useStateValue} from './StateProvider';
function Subtotal() {

  const [{basket}, dispatch] = useStateValue();
 
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Итого ({basket.length} вещей): <strong>{0}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Подарок включен к этому заказу
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
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