import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home() {
  return (
    <div>
      <Banner />
       <div className='home__section'>
          <Card image="https://img.icons8.com/color/344/bag-front-view.png" title="Сумка" price="30 b.p"/>

          <Card image = "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-sticker-graffiti-artist-inipagistudio-mixed-inipagistudio.png" title="Стикеры" description="" price="5 b.p"/>

          <Card image = "https://img.icons8.com/office/344/baby-bottle.png" title="Бутылка" description="" price="15 b.p"/>

          <Card image = "https://img.icons8.com/plasticine/344/womens-t-shirt.png" title="Футболка" description="" price="50 b.p"/>
          
          <Card image = "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-sticker-graffiti-artist-inipagistudio-mixed-inipagistudio.png" title="Стикеры" description="" price="5 b.p"/>

          <Card image = "https://img.icons8.com/office/344/baby-bottle.png" title="Бутылка" description="" price="15 b.p"/>

          <Card image = "https://img.icons8.com/plasticine/344/womens-t-shirt.png" title="Футболка" description="" price="50 b.p"/>
      </div>
      
      <div className='home__section'>
      <Card image="https://img.icons8.com/color/344/bag-front-view.png" title="Сумка" price="30 b.p"/>

      <Card image = "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-sticker-graffiti-artist-inipagistudio-mixed-inipagistudio.png" title="Стикеры" description="" price="5 b.p"/>

      <Card image = "https://img.icons8.com/office/344/baby-bottle.png" title="Бутылка" description="" price="15 b.p"/>

      <Card image = "https://img.icons8.com/plasticine/344/womens-t-shirt.png" title="Футболка" description="" price="50 b.p"/>

      <Card image = "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-sticker-graffiti-artist-inipagistudio-mixed-inipagistudio.png" title="Стикеры" description="" price="5 b.p"/>

      <Card image = "https://img.icons8.com/office/344/baby-bottle.png" title="Бутылка" description="" price="15 b.p"/>

      <Card image = "https://img.icons8.com/plasticine/344/womens-t-shirt.png" title="Футболка" description="" price="50 b.p"/>
      </div>
      
    </div>
  )
}

export default Home