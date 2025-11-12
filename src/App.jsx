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

      <div className="container">

        <div className="row">

          {/* map the array to create a card for every object (actresses) */}
          {
            actresses.map(actress => (
              <div key={actress.id} className="card">
                <div className="card_image">
                  <img src={actress.image} alt={actress.name} />
                </div>
                <div className="actress_details">
                  <h2 className="actress_name">{actress.name}</h2>
                  <p className="actress_birth">{actress.birth_year}</p>
                  <p className="actress_nation">{actress.nationality}</p>
                  <p className="actress_bio">{actress.biography}</p>
                  <p className="actress_awards">{actress.awards}</p>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </>
  )
}

export default App
