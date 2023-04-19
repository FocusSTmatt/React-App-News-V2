import React from 'react'
import "../styles/news.css"
import Dotdotdot from 'react-dotdotdot'
import {Link} from "react-router-dom"
import movieData from '../assets/data'
import { Img } from 'react-image'
import notFound from '../assets/Nothing.jpg'


 
 


const NewsTest = () => {
  const myData = movieData.map((item, index) => {
      const imgNotFound = "../assets/Nothing.jpg"

      return (
        <div>
          
      
          
       
        <Img alt="this is bullshit" src={[item.urlToImage, notFound]} />
        {/* <img alt="testing" src={item.urlToImage} />  */}
        <p>{item.title}</p>
        </div>
      )
  })// var TextTruncate = require('react-text-truncate'); 


  return (
      <div>
        <h1>test</h1>
        
        {myData}
      </div>
  )
}

export default NewsTest

