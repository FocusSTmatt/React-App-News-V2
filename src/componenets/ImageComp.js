import React from 'react'
import { Img } from 'react-image';

const ImageComp = () => {
  return (
    <>
    <Img className='news-img' 
                   alt="Related To Article"  
                   onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://th.bing.com/th?id=OIP.BoU3RaYveiV_Rzvs8ibELAHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
                  }}
                />
    </>
  )
}

export default ImageComp
