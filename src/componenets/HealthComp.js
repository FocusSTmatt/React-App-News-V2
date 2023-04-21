import React, {useState} from 'react';
import useFetch from '../useFetch';
import "../styles/newstest.css"
import { Img } from "react-image"
import notFound from "../assets/Nothing.jpg"
import {IoMdClose} from "react-icons/io"

function HealthComp() {
  const [isClicked, setIsClicked] = useState({
    activeObject: null,
  });

  function handleClick(index){
    setIsClicked({activeObject: data.articles[index]});
    console.log(isClicked)
  }

  function toggleActiveStyles(index){
    if (data.articles[index] === isClicked.activeObject){
      return "content visible"
    } else { return "content hidden" }
  }
 
 const {data, loading, error} = useFetch("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ffb8136ba46542b3b04497ea8fc4a206")
  console.log(data)
 if (loading) return <h1>LOADING....</h1>

 if (error) console.log(error)
  
  return (
    <div className='main-ctn'>
      {data?.articles.map((item, index) => {
        
      return (
        <div key={index} className='inside-ctn' style={{background: "black"}}>  
               <a target="_blank" rel="noopener noreferrer" href={item.url}><Img className='main-img' 
                  alt="Related To Article" 
                  src={[item.urlToImage, notFound]} 
                  onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src="https://th.bing.com/th?id=OIP.BoU3RaYveiV_Rzvs8ibELAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
              }}/></a>
              <button onClick={() => {handleClick(index)}} className='title-btn'><span className='title-btn-text'>{item.title}</span></button>
            <div key={index} id="content" className={toggleActiveStyles(index)}>
              <IoMdClose onClick={handleClick} className='close-icon' />
              <p className='content-text'>{item.content}</p>
            </div>
        </div>
        )
      })}
    </div>
  );
}

export default HealthComp;



 
 





