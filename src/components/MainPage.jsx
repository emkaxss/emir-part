import React from 'react'


import "./MainPage.css"

import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"

const MainPage = () => {
  return (
    <main>
      <section className="mainPage">

        <div className="mainPageWrapper">
          <div className="mainPageTitle">

          </div>
          <div className="mainPageDescription">
            <p>Каждый музыкальный инструмент — это история музыки</p>
          </div>
        </div>

      </section>
      <section className="stocksAndAbout">
        <div className="container">
          <div className="stocks">
            <div className="stocksTitle">
              АКЦИИ
            </div>
            <div className="stocksImg">
              <img src={first} alt="" />
              <img src={second} alt="" />
              <img src={third} alt="" />
            </div>
          </div>
        </div>
        <div className="about">
        </div>
        <div className="aboutcontainer">
          <div className="aboutTitle">
            о нас
          </div>
          <div className="aboutDescription">
            TEMPO  - онлайн - магазин музыкальных инструментов,  был основан в 2023 году в Кыргызстане (г.Бишкек).
            <br />
            <br />
            TEMPO - это магазин, где представлен широкий ассортимент качественных  музыкальных инструментов,
            аксессуаров и звукового оборудования различных ценовых  категорий от бюджетной продукции до элитной.
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainPage