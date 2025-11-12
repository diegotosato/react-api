import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  //AjaxCall#1 endpoint into a variable
  const actressesEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'

  //variable to collect ajax call content with initial state of empty array
  const [actresses, setAtresses] = useState([])

  //function to do the ajax call
  function handleAtresses() {
    axios.get(actressesEndpoint)
      .then(res => setAtresses(res.data))
  }
  //manage the function to be done only one time at the load of the component
  useEffect(handleAtresses, [])
  console.log(actresses);




  return (
    <>
      <h1>API</h1>

      {/* map the array to create a card for every object (actresses) */}
      {
        actresses.map(actress => (
          <div key={actress.id} className="card">
            <div className="card_image">
              <img src={actress.image} alt={actress.name} />
            </div>
            <div className="dati_actress">
              <h3>{actress.name}</h3>
              <p>{actress.birth_year}</p>
              <p>{actress.nationality}</p>
              <p>{actress.biography}</p>
              <p>{actress.awards}</p>
            </div>
          </div>
        ))
      }


    </>
  )
}

export default App
