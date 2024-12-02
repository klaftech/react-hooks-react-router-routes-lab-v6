import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Directors() {
  
  const [directors,setDirectors] = useState()

  useEffect(()=>{
    fetch("http://localhost:4000/directors")
      .then(res => res.json())
      .then(data => setDirectors(data))
  },[])
  
  if(!directors) return (<div>Loading directors</div>)
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director => {
          return (<article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((element) => <li key={element}>{element}</li>)}
            </ul>
          </article>)
        })}
      </main>
    </>
  );
};

export default Directors;
