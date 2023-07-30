import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';



const NewsPage = () => {
    // 1. 
  const [newsList, setNewsList] = useState([]);

  console.log(newsList)

  
// 2xcf
  const fetchData = async () => {
//4
    try{

      const {data, status} = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef')
      console.log("&&&&&&&&&&&&&&&&&&&&", data)
      console.log(status)
      if(status === 200){

        setNewsList(data.articles)
      }
  
    }catch(e){
      console.log(e.message)
  
  
    }
  }

  // try{
  //   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef');
  //   const json  = await response.json();
  //   setData(json.articles);
  // }
  // catch(e){
  //   console.log(e.message);

  // }

 

//3
  useEffect(()=>{

    fetchData();
  },[])

// 5
  return (
    
    <Container className={"mt-3"}>
        <Row>

        {newsList && newsList.map((item, index) => (
            <Col className='mt-3 mb-3'>
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={item.urlToImage} style={{height : "250px"}}/>
                <Card.Body>
                    <Card.Title>{item.title.slice(0,10)}</Card.Title>
                    <Card.Text>
                    {item.description.slice(0,80)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>


      
      



    


  )
};

export default NewsPage;