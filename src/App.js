import { useState } from 'react';
import './App.css';
import Home from './pages/home';

function App() {
  const [title1, setTitle1]= useState("Todo app")
  const [title2, setTitle2]= useState("Todo syed")
  return (
    <div className="App">
     <Home appTitle={title1}/>
    </div>
  );
}

export default App;
