import React from 'react'
import './offers.scss'
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'

//import d image
import img8 from '../../Assets/image/img8.jpg'
import img9 from '../../Assets/image/img9.jpeg'
import img10 from '../../Assets/image/img10.jpeg'
import img11 from '../../Assets/image/img11.jpeg'


//on cree une variable pour stocker d autre offres
const Offer =[
  {
    id: 1,
    imgSrc: img9,
    destTitle: "Manchu Pichu",
    location: "Peru",
    price: " $2737",
  },
  {
    id: 2,
    imgSrc: img10,
    destTitle: "Santorini",
    location: "Greece",
    price: " $22333",
  },
  {
    id: 3,
    imgSrc: img11,
    destTitle: "Kyoto",
    location: "Japan",
    price: "$3333",
  },
]



const Offers = () => {
  return (
     <section className='offer container section'>
           <div className="secContainer">
              <div className="secIntro">
                  <h2 className="secTitle">Special Offers</h2>
                  <p>
                    Discover our exclusive offers tailored just for you. Enjoy discounts, special packages, and limited-time deals that enhance your experience with us. Don't miss out on these fantastic opportunities to save and enjoy more!
                  </p>
              </div>

              <div className="mainContent grid">

                   {
                    Offer.map(({id,imgSrc,destTitle,location,price})=>{ 
                      return(            
                    <div className="singleOffer">
                         <div className="destImage">
                          <img src={imgSrc} alt={destTitle} />

                          <span className='discount'>
                               30% off
                          </span>
                         </div>

                         <div className="offerBody">
                          <div className="price flex">
                            <h4>{price}</h4>
                            <span className="status">
                              For Rent
                            </span>
                          </div>

                             <div className="amenities flex">

                                <div className="singleAmenity flex">
                                  <MdKingBed className='icon'/>
                                  <small>2 Beds</small>
                                </div>
                                <div className="singleAmenity flex">
                                  <MdBathtub className='icon'/>
                                  <small>2 Bath</small>
                                </div>
                                <div className="singleAmenity flex">
                                  <FaWifi className='icon'/>
                                  <small>Wi-Fi</small>
                                </div>
                                <div className="singleAmenity flex">
                                  <MdAirportShuttle className='icon'/>
                                  <small>Shuttle</small>
                                </div>

                             </div>

                             <div className="location">
                                <MdLocationOn  className='icon'/>
                                <small>450 Vine #310, {location}</small>
                             </div>

                             <button className='btn flex'>
                              View Details
                               <BsArrowRightShort className='icon'/>
                             </button>
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

export default Offers
