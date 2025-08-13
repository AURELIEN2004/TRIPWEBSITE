import React from 'react'
import './popular.scss'
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// import tthe images
import img2 from '../../Assets/image/img2.jpg';
import img3 from '../../Assets/image/img3.jpg';
import img4 from '../../Assets/image/img4.jpg';
import img5 from '../../Assets/image/img5.jpeg';
import img6 from '../../Assets/image/img6.jpg';
import img7 from '../../Assets/image/img7.jpg';


//on cree une variable liste pour stocker les logements

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Manchu Pichu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "Santorini",
    location: "Greece",
    grade: "ROMANTIC ESCAPE",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "ZEN EXPERIENCE",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "Banff National Park",
    location: "Canada",
    grade: "NATURE ADVENTURE",
  },
  {
    id: 5,
    imgSrc: img6,
    destTitle: "Cape Town",
    location: "South Africa",
    grade: "COASTAL DISCOVERY",
  },
  {
    id: 6,
    imgSrc: img7,
    destTitle: "Petra",
    location: "Jordan",
    grade: "HISTORICAL TREK",
  }
];



const Popular = () => {
  return (
   <section className='popular section container'>
      <div className="secContainer">

        <div className="secheader flex">
           <div className="textDiv">
            <h2 className='secTitle'>
              Popular Destination
            </h2>
            <p>
              Explore the most popular destinations around the world. From vibrant cities to serene landscapes, discover the places that captivate travelers.
            </p>
           </div>

           <div className="iconsDiv flex">
             <BsArrowLeftShort className='icon lefticon'/>
             <BsArrowRightShort className='icon' />
           </div>
       
        </div>

            <div className="mainContent grid">
                {
                  Data.map(( {id,imgSrc,destTitle,location,grade})=>{
                      return( 
                        <div className="singleDestination">
                    <div className="destImage">

                        <img src={imgSrc} alt=" title" />

                        <div className="overlayInfo">
                          <h3>{destTitle}</h3>
                          <p>
                              {location}
                          </p>
                          {/* <BsArrowLeftShort className='icon'/> */}
                          <BsArrowRightShort className='icon' />
                        </div>
                        
                    </div>

                    <div className="destFooter">
                      <div className="number">
                        0{id}
                      </div>

                      <div className="destTexte flex">
                          <h6>{location}</h6>
                          <span className='flex'>
                              <span className="dot">
                                <BsDot className='icon'/>
                              </span>
                              {grade}
                          </span>
                      </div>

                    </div>
                  </div>
                      )
                  })
                }
            </div>


      </div>
   </section>
  )
}

export default Popular
