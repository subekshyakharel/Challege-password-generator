import logo from './logo.svg';
import './App.css';

function App() {
    const checkbox = [
    {title : "Include Uppercase Letters", state : false}, 
    { title : "Include Lowercase Letters", state: false}, 
    {title: "Include Numbers", state : false}, 
    {title: "Include symbols", state: false}
  ]
  return (
    <div>
      <div className="wrapper">
        <div className='Center'>
        {/* password */}
        <div className="pw">
          <span>jksdn</span>
          <button className='btn'>Copy</button>
        </div>

        {/* character choosen */}
        <div className="character">
          <div className='flex'>
             <span>Character length</span>
             <span id='length'>0</span>
             </div>

             <div>
              <input type="range" 
              min= "0"
              max="20"
              // value= "3" 
              className='range'  
              />
             </div>

              <div className="contain-checkbox">
             {checkbox.map((item ,index)=>{
              return (
                <div className="checkbox">
                <input type="checkbox" />
                <label key={index}> {item.title}</label>
               </div>
              )
             })}
             </div>


          {/* strength  */}
          <div className="strength"></div>

          {/* generator  */}
          <button className='btn-generate'>Generate</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
