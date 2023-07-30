import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNews } from '../apis/newsApi';



const NewsPage = () => {


const {data, isLoading} = useNews('news')


console.log('++++', data);

if(isLoading){
  return (
      <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
      </Spinner>
  )
}



//     // 1. 
//   const [newsList, setNewsList] = useState([]);

//   console.log(newsList)

  
// // 2xcf
//   const fetchData = async () => {
// //4
//     try{

//       const {data, status} = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef')
//       console.log("&&&&&&&&&&&&&&&&&&&&", data)
//       console.log(status)
//       if(status === 200){

//         setNewsList(data.articles)
//       }
  
//     }catch(e){
//       console.log(e.message)
  
  
//     }
//   }

  // try{
  //   const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=a59be9aa893d41d6844304d4c23162ef');
  //   const json  = await response.json();
  //   setData(json.articles);
  // }
  // catch(e){
  //   console.log(e.message);

  // }

 

//3
  // useEffect(()=>{

  //   fetchData();
  // },[])

// 5
  return (
    
    <Container className={"mt-3"}>
        <Row>

        {data && data.map((item, index) => (
            <Col className='mt-3 mb-3'>
            <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src={item.urlToImage} style={{height : "250px"}}/>
                <Card.Body>
                    <Card.Title>{item.title.slice(0,20)}</Card.Title>
                    <Card.Text>
                    {item.description.slice(0,20)}
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