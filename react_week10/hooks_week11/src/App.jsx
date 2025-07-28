import { useState } from 'react'
import './App.css'
import { usePostTitle, useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/usePrev'
import { useDebounce } from './hooks/useDebounce'

// function App(){
//   const [state , setState] = useState(0);
//   const prev = usePrev(state); // Prev Hook

//   function increaseCount(){
//     setState(cnt => cnt + 1);
//   }

//   return <div>
//     <p>{state}</p>
//     <button onClick={increaseCount}> Click me </button>

//     <p>The prev value was {prev}</p>
//   </div>

// }

function App(){

  function sendDatatoBackend(){
    fetch("api.amazon.com/search/")
  }
  
  const debounce = useDebounce(sendDatatoBackend);

  return <> 
    hi there
    <input type='text' onChange={debounce}></input>
  </>
}



// function App() {
//   const [currentPost , setCurrentPost]  = useState(1);
//   const { finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost);

//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)} >1</button>
//       <button onClick={() => setCurrentPost(2)} >2</button>
//       <button onClick={() => setCurrentPost(3)} >3</button>
//       { JSON.stringify(finalData) }
//     </div>
//   )
// }

export default App
