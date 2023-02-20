import './Tabs.css'

//Creating Tabs for the UI
function Tabs () {
    return(

<div className="container">
            
        <div className='nav-tabs'>
        <div className='tabs active-tabs'>Tab 1</div>
        <div className='tabs'>Tab 2</div>
        <div className='tabs'>Tab 3</div>
        <div className='tabs'>Tab 4</div>
        </div>

    
        <div className="content-tabs">
            <div className="content">
            <h2>Quotes:</h2>
            <p>data array </p>
            </div>
            </div>

        <div className="content">
            <h2>Quotes:</h2>
            <p>data array </p>
            </div>
            
        
        <div className="content">
            <h2>Quotes:</h2>
            <p>data array </p>
            </div>
            
        <div className="content">
            <h2>Quotes:</h2>
            <p>data array </p>
            </div>
        
        
        </div>
    );
}
export default Tabs;