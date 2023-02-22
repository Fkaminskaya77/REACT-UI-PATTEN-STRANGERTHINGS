import { useState } from 'react';
import './Tabs.css'

//Creating Tabs for the UI and using state

function Tabs () {
 const [toggleState, setToggleState] = useState(1)

const toggleTab = (index) => {
    setToggleState(index);
}


    return(

<div className="container">
            
        <div className='nav-tabs'>

    <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}>Tab 1</button>
   
    <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}>Tab 2</button>
        
    <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}>Tab 3</button>

    <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(4)}>Tab 4</button>
        </div>

    
        <div className="content-tabs">
            <div className={toggleState === 1 ? "content  active-content" : "content"} >
            <h2>Quotes set 1:</h2>
            <p>data array </p>
            </div>
            </div>

       
      <div  className={toggleState === 2 ? "content  active-content" : "content"}>
            <h2>Quotes set 2:</h2>
            <p>data array </p>
            </div>
            
        
        <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <h2>Quotes set 3:</h2>
            <p>data array </p>
            </div>
            
        <div className={toggleState === 4 ? "content  active-content" : "content"} >
            <h2>Quotes set 4:</h2>
            <p>data array </p>
            </div>
        
        
        </div>
        
    );
}
export default Tabs;