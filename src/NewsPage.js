import React, { useEffect, useState } from 'react';
import axios from 'axios';




const NewsPage = () => {

  const [data, setData] = useState([]);

  console.log(data)

  

  const fetchData = async () => {

    try{

      const {data, status} = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-06-22&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef')
      console.log("&&&&&&&&&&&&&&&&&&&&", data)
      console.log(status)
      if(status === 200){

        setData(data.articles)
      }
  
    }catch(e){
      console.log(e.message)
  
  
    }
  }

  // try{
  //   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-06-22&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef');
  //   const json  = await response.json();
  //   setData(json.articles);
  // }
  // catch(e){
  //   console.log(e.message);

  // }

 


  useEffect(()=>{

    fetchData();
  },[])


  return (
    <div>
    
      {data && data.map(article => (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </>
      ))}
      
  


  </div>



    


  )
};

export default NewsPage;