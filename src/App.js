import { useEffect, useState } from "react";
import './App.css';

function App(){

  const [tip, setTip] = useState('');

  const getTip =async()=>{
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTip(data.activity)
    console.log(data.activity)
}

useEffect(()=>{
  getTip();
}, [])




  return( <div className="center">
    <div >
      <h1>stop being boring & start any activity!</h1>
    
    </div>
    
    <div>
      <h3>{tip}</h3>
    </div>
    <div>
      <button onClick={getTip}>Next tip</button>
    </div>
    <div>
      <img src="https://nomadnarrativeorg.files.wordpress.com/2018/09/lazy-woman-e1535904728112.jpg?w=1000" alt="cc"/>
    </div>


</div>
  )
}
export default App;