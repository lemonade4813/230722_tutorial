import axios from 'axios';
import React, { useEffect, useState } from 'react';


const MoviePage = () => {

    const [movies, setMovies] = useState([]);

    const fetchData =  async () => {

        try{

            const options = {
                headers : {
                    Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTAyZWViZjJiZGFiMDVmMmUyNzljZTlhYjFhMDdjMCIsInN1YiI6IjY0YmI3MDdjZmQ0YTk2MDEwNmIyMjEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._t6jjV99VSKuUJFHUixvjI3gScgP_3fxDIr55RNvQfQ"
                }

            }
            const {data, status} = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)

            console.log(data)
            
            if(status === 200){
                setMovies(data.results)
            }

        }catch(e){

            console.log(e.message);


        }



    }

    useEffect(()=>{

        fetchData();
    })



    return (
        <div>
            <h1>Movie</h1>
        
            {movies && movies.map(movie => (
                <>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>{movie.vote_average}</p>
                </>
            ))}



        </div>
    );
};

export default MoviePage;