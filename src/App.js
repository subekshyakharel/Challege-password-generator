import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Passwordgenerator from './hooks/use-passwordgenerator';

function App() {
  const [length, setlength] = useState(4)
  const [checkbox, setcheckbox] = useState([
    {title : "Include Uppercase Letters", state : false}, 
    { title : "Include Lowercase Letters", state: false}, 
    {title: "Include Numbers", state : false}, 
    {title: "Include symbols", state: false}
  ])

  const handleOnCheckbox = (i) =>{
    const updatedCheckbox = [...checkbox]
    updatedCheckbox[i].state = !checkbox[i].state
    setcheckbox(updatedCheckbox)
  }

  const {password, error, generator} = Passwordgenerator()
 
  return (
    <div>
      <div className="wrapper">
        <div className='Center'>
        {/* password */}
        <div className="pw">
          <span>{password}</span>
          <button className='btn'>Copy</button>
        </div>

        {/* character choosen */}
        <div className="character">
          <div className='flex'>
             <span>Character length</span>
             <span id='length'>{length}</span>
             </div>

             <div>
              <input type="range" 
              min= "0"
              max="20"
              value= {length} 
              className='range'  
              onChange={(e)=>setlength(e.target.value)}
              />
             </div>

              <div className="contain-checkbox">
             {checkbox.map((item ,index)=>{
              return (
                <div className="checkbox">
                <input type="checkbox" onChange={()=>(handleOnCheckbox(index))} checked= {item.state} />
                <label key={index}> {item.title}</label>
               </div>
              )
             })}
             </div>


          {/* strength  */}
          <div className="strength"></div>

          {/* error handling */}
          {error && <div className='errormessage'>{error}</div>}

          {/* generator  */}
          <button onClick={()=>(generator(checkbox, length))} className='btn-generate'>Generate</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
