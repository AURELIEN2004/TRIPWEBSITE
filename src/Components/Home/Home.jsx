import React from 'react'
import './home.scss'


const Home = () => {
  return (
    <section className="home">
      <div className="secContainer contanier">
        <div className="homeText">
          <h1 className="title">
            Plan Your Trip with Travel Dot
          </h1>

          <p className="subTitle">
            Travel opens the mind to new cultures, experiences, and unforgettable adventures.
          </p>

          <button className="btn">
            <a href="/">Explore Now</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
