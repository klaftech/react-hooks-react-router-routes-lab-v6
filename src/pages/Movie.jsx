import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import NavBar from '../components/NavBar'

function Movie() {
  const params = useParams()
  const [movie,setMovie] = useState()

  useEffect(()=>{
    fetch("http://localhost:4000/movies/"+params.id)
    .then(res => res.json())
    .then(data => setMovie(data))
  },[])

  if(!movie) return (<div>Movie Loading...</div>)
  
    return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((element) => <span key={element}>{element}</span>)}
      </main>
    </>
  );
};

export default Movie;
