import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {useStateValue} from './StateProvider';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import {
  Link
} from "react-router-dom";
import { auth } from './firebase';

function Header() {
  const [{basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to='/'>
        <img className="header__icon" 
            src="https://samgau.com/images/logo/mainlogo_g_b.png"
            alt=""
        />
      </Link>
         
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className='header__nav'> 
          <Link style={{ textDecoration: 'none' }} to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header__option'>
              <span className='header__optionLineOne'>
                Привет
              </span>

              <span className='header__optionLineTwo'>
                {user ? 'Выйти' : 'Войти'} </span>
            </div>
          </Link>
          
          <Link style={{ textDecoration: 'none' }} to='/problem'>
            <div className='header__option'>
              <span className='header__optionLineOne' >
                  Сегодня
                </span>

                <span className='header__optionLineTwo'>
                  Задачи
              </span>
            </div>
          </Link>

          <div className='header__option'>
           <span className='header__optionLineOne'>
              Мои
            </span>

            <span className='header__optionLineTwo'>
              Покупки
            </span>
          </div>

          <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
          </Link>

        </div>
    </div>

    
  )
}

export default Header