import './App.css'
import { useEffect } from 'react';

function Parent({ children }) {
  
  useEffect(() => {
    console.log("Parent committed effect");
  }, []);
  console.log("Parent is rendered");

  return <div>{children}</div>;
}


function Child() {
  console.log("Child is rendered");
  useEffect(() => {
    setTimeout(() => console.log("Child committed effect") , [2000])
  }, []);

  return <p>Child</p>;
}



function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

export default App
