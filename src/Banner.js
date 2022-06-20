import React from 'react'
import './Banner.css'
import { Button } from "@mui/material"
function Banner() {
  return (
    <div className='banner'>
        <div className='banner__info'>
            <h1>Вылполняйте задачи Зарабатывайте бонусы И получайте подарки</h1>
            <h5>Тут немножко маленький текст. Тут немножко маленький текст. Тут немножко маленький текст.</h5>

            <Button>За подарками!</Button>

            {/* <img className='banner__photo' src='https://pngroyale.com/wp-content/uploads/2022/04/Cute-Husky-PNG-Image-768x553.png'
            /> */}
        </div>

    </div>
  )
}
//https://toppng.com/uploads/preview/husky-png-transparent-images-siberian-husky-puppy-11563390263ta7cgu4vna.png
export default Banner