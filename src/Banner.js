import React from 'react'
import './Banner.css'
import { Button } from "@mui/material"
import {
  Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Banner() {

  return (
    <div className='banner'>
        <div className='banner__info'>
            <h1>Выполняйте Задачи Зарабатывайте Бонусы Получайте Подарки</h1>
            <h5></h5>
            <Button onClick={() => {window.location.href="/problem"}} variant='outlined'>Задачи!</Button>
            

            {/* <img className='banner__photo' src='https://pngroyale.com/wp-content/uploads/2022/04/Cute-Husky-PNG-Image-768x553.png'
            /> */}
        </div>

    </div>
  )
}
//https://toppng.com/uploads/preview/husky-png-transparent-images-siberian-husky-puppy-11563390263ta7cgu4vna.png
export default Banner