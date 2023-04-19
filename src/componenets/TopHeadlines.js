import React from 'react';
import useFetch from '../useFetch';
import "../styles/news.css"
import Dotdotdot from 'react-dotdotdot'
import {Link} from "react-router-dom"
import { Img } from "react-image"
import notFound from "../assets/Nothing.jpg"

function TopHeadlines() {


 const {data, loading, error} = useFetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=795e481050424606bc5f42699b289c94")
  console.log(data)
 if (loading) return <h1>LOADING....</h1>

 if (error) console.log(error)
  console.log(data)
  
  return (
    <div>
      {data?.articles.map((item, index) => {

       return (
          <div className='outside-ctn'>
          <div key={index} className='article-ctn'>
                      
                <Img className='news-img' 
                   alt="Related To Article" 
                   src={[item.urlToImage, notFound]} 
                   onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://th.bing.com/th?id=OIP.BoU3RaYveiV_Rzvs8ibELAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
                  }}
                />
                <Dotdotdot clamp={"auto"}>
                    <Link className='title-text'>{item.title}</Link>          
                </Dotdotdot>
          </div>
        </div>
        )
      })}
    </div>
  );
}

export default TopHeadlines;



 
 




