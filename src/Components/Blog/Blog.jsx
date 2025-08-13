import React from 'react'
import './blog.scss'
import { BsArrowRightShort } from 'react-icons/bs'

//image d utilisateurs
import imga from'../../Assets/image/imga.jpeg';
import imgb from'../../Assets/image/imgb.jpeg';
import imgc from'../../Assets/image/imgc.jpeg';
import imgd from'../../Assets/image/imgd.jpeg';

//variavle pour contenir

const Posts = [
 { id: 1,
postImage: imga,
title: 'Let us have an adventure outside Tunisia.',
desc: 'Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region'
 },
 {
id: 2,
postImage: imgb,
title: 'Best Country in East Africa',
desc: 'When Kenya claimed its independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto.'
},
  {
  id: 3,
  postImage: imgc,
  title: 'Exploring the Vast Landscapes of Namibia',
  desc: 'Namibia offers surreal desert scenery, wildlife safaris, and cultural richness. A perfect escape for nature lovers and photographers.'
},
{
  id: 4,
  postImage: imgd,
  title: 'Hidden Villages of Rural Japan',
  desc: 'Beyond Tokyo’s neon lights lie peaceful mountain villages, ancient traditions, and breathtaking seasonal beauty waiting to be explored.'
}


]

const Blog = () => {
  return (

      <section className='blog container section'>
        <div className='secContainer'>

          <div className='secIntro'>
            <h2 className='secTitle'>
              Our Best Blog?
            </h2>
            <p>
              An insight to the incredible experince in the world.
            </p>
          </div>

            <div className="mainContainer grid">
                {
                  Posts.map(({id,postImage,title,desc})=>{
                    return(
              <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt= {title} />
                </div>

                <div className="postDetails">
                  <h3>{title}</h3>
                  <p>{desc}
                  </p>
                </div>

                <a href="#" className="flex">Read More
                  <BsArrowRightShort className='icon'/>
                  
                </a>
              </div>
                    )
                  })
                }
               

            </div>


        </div>
      </section> 
      
    
  )


}

export default Blog
