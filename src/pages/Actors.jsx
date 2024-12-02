import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Actors() {
  
  const [actors,setActors] = useState()

  useEffect(()=>{
    fetch("http://localhost:4000/actors")
      .then(res => res.json())
      .then(data => setActors(data))
  },[])
  
  if(!actors) return (<div>Loading actors</div>)
  
  const actorData = actors.map(actor => {
    return (<article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((element) => <li key={element}>{element}</li>)}
      </ul>
    </article>)
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorData}
      </main>
    </>
  );
};

export default Actors;
