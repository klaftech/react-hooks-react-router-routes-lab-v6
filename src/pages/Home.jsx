import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

function Home() {
  
  const [movies,setMovies] = useState()

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
  },[])
  
  if(!movies) return (<div>Loading movies</div>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => <MovieCard key={movie.id} id={movie.id} title={movie.title} />)}
      </main>
    </>
  );
};

export default Home;
