import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const getApi =  async() => {
    const response = await fetch('https://cdn2.thecatapi.com/images/473.jpg');
    const data = await response.json();
    setData(data.data);
  }
  getApi();



  return (
    <>
    <div className="whole-page">
      <h1>Trippin' on Cats!</h1>
      <p>Discover the cats from your wildest dreams!</p>
      <p>😺😸😹😻😼😽🙀😿😾</p>
      <div className="discover-container">
        <button className='discover-button' onClick ={setData}>Discover!</button>
      </div>
    </div>
    <div className="side-nav">
      <h2>Ban List</h2>
      <h4>Select an attribute in your list to ban it.</h4>
    </div>
    <div className="history-sidebar">
      <h2>Who have we seen so far?</h2>
    </div>
      </>
  )
}

export default App
