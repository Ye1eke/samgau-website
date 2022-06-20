import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className="header">
        <img className="header__icon" 
            src="https://samgau.com/images/logo/mainlogo_g_b.png"
            alt=""
        />
        
        <div className='header__center'>            
            <input type="text"/>
            <SearchIcon />
        </div>

        <div className='header__right'> 
          <p>Главная</p>
          <p>Задачи</p>
          <p>Мои покупки</p>
          <ShoppingCartIcon />
          <p>35 b.p.</p>
          <ArrowDropDownIcon />
        </div>
    </div>

    
  )
}

export default Header