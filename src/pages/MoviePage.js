import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card , Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useMovies } from '../apis/movieApi';

const MoviePage = () => {

    const navigate = useNavigate();

    const {data, isLoading, isError} = useMovies('movies')

    console.log('++++++++', data)

    if(isLoading){
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    if(isError){

        console.log(isError)
    }

    // const [movies, setMovies] = useState([]);

    // const fetchData =  async () => {

    //     try{

    //         const options = {
    //             headers : {
    //                 Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTAyZWViZjJiZGFiMDVmMmUyNzljZTlhYjFhMDdjMCIsInN1YiI6IjY0YmI3MDdjZmQ0YTk2MDEwNmIyMjEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._t6jjV99VSKuUJFHUixvjI3gScgP_3fxDIr55RNvQfQ"
    //             }

    //         }
    //         const {data, status} = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)

    //         console.log(data)
            
    //         if(status === 200){
    //             setMovies(data.results)
    //         }

    //     }catch(e){

    //         console.log(e.message);


    //     }



    //}

    // useEffect(()=>{

    //     fetchData();
    // },[])



    return (
        <Container className={"mt-3"}>
            <Row>
            <h1>Movie</h1>
        
            {data && data.map(movie => (
                <Col className='mt-3 mb-3'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} />
                <Card.Body>
                  <Card.Title>{movie.title.slice(0,10)}</Card.Title>
                  <Card.Text>
                    {movie.overview.slice(0,80)}
                  </Card.Text>
                  <Button variant="primary" onClick={()=> navigate(`/${movie.id}`) }>Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
            ))}

            </Row>

        </Container>
    );
};

export default MoviePage;