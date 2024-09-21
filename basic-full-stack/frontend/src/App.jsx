import { useEffect, useState } from "react"
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get('/api/jokes').then(res => setJokes(res.data)).catch(e => console.log(e));
    setLoading(false);
  },[jokes]);

  return loading ? <h1>Loading</h1> : (
    <>
      <h1>This is sample project</h1>
      <span>Jokes {jokes.length}</span>
      <ul>
        {jokes.map(joke => (<li>{joke.joke}</li>))}
      </ul>
    </>
  )
}

export default App
