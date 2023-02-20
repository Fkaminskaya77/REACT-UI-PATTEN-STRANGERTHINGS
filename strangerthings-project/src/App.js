import './Components/Tabs'
import React, { useState, useEffect } from 'react';
import './index'
import './App.css';
import Tabs from'./Components/Tabs'


  function App() {
    //API URL From Stranger things Quotes
      const URL = 'https://strangerthings-quotes.vercel.app/api/quotes/5';
      const [quotes, setQuotes] = useState([])
  
      //Fetching Data from API
    function getQuotes () {
      fetch(URL)
      
    .then(response => response.json())
    .then(data => setQuotes(data))
  }
  useEffect(getQuotes, []);
 console.log(quotes)
  
 //Getting data to populate on Page using .map 
 // Author would'nt pop up from array added my own little extra edit
 //rendering Tabs from Tab Component to main page(App.js)
 return(
  <main className="App">
    <h1 className='heading'>Stranger Things Quotes</h1>
  <div className='quotes'></div>
  {quotes.map((quotes, index) => (
    <li key={index}> {quotes.quote} Author: {quotes.author}</li>
  )
 )}
    <div>
  <Tabs/>
  </div>

  </main>

   );
}

export default App;
