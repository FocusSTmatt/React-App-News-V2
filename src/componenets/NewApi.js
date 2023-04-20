import React from 'react'
import useFetch from '../useFetch'

const NewApi = () => {
    const {data, loading, error} = useFetch("https://newsdata.io/api/1/news?apikey=pub_20767d38eb226fa7000851ffbb5405621d9f9&q")
    console.log(data)
   if (loading) return <h1>LOADING....</h1>
  
   if (error) console.log(error)
    console.log(data)


  return (
    <div>
      
    </div>
  )
}

export default NewApi
