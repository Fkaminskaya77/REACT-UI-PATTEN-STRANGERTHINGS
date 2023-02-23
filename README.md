# REACT-UI-PATTERN-STRANGERTHINGS
  
 This project was built with React Program, a UI pattern of tabs, and an API  with the theme Stranger things!
 The most important things for this project was getting the API to pull information in the console and on the page, getting your Tabs to be functional and the hardest thing, I found was after all that, make sure your data populates inside the tab components you create.
 
 I used the application Trello to keep myself organized and write down small tasks to be able to compelete the project!
   Here is the link for that board in Trello : https://trello.com/b/E13tTzVc
 
** API code snippiet : **
  
``` function App() {
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
   ```
  
  You can check out the API link here: https://strangerthings-quotes.vercel.app/
  

The inspo for the UI Pattern
 ![Eleven](https://user-images.githubusercontent.com/117240024/221051649-85037d9a-8f3b-4c8a-9fa7-d74a2dd1b4da.png)



 
 Final Product :
 
<img width="1512" alt="Screenshot 2023-02-12 at 2 30 38 PM" src="https://user-images.githubusercontent.com/117240024/221051726-264d366c-b9b9-49a1-9953-62f032b2ce66.png">
