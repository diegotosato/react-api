import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  //AjaxCall#1 endpoint into a variable
  const actressesEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'

  //variable to collect ajax call content with initial state of empty array
  const [actresses, setActresses] = useState([])

  //function to do the ajax call
  function handleActresses() {
    axios.get(actressesEndpoint)
      .then(res => setActresses(res.data))
  }
  //manage the function to be done only one time at the load of the component
  useEffect(handleActresses, [])
  console.log(actresses);





  //AjaxCall#1 endpoint into a variable
  const actorsEndpoint = 'https://lanciweb.github.io/demo/api/actors/'

  //variable to collect ajax call content with initial state of empty array
  const [actors, setActors] = useState([])

  //function to do the ajax call
  function handleActors() {
    axios.get(actorsEndpoint)
      .then(res => setActors(res.data))
  }
  //manage the function to be done only one time at the load of the component
  useEffect(handleActors, [])
  console.log(actors);



  return (
    <>
      {/* Actress */}
      <h1>Actress</h1>

      <div className="container">

        <div className="row">

          {/* map the array to create a card for every object (actresses) */}
          {
            actresses.map(actress => (
              <div key={actress.id} className="card">
                <div className="card_image">
                  <img src={actress.image} alt={actress.name} />
                </div>
                <div className="card_details">
                  <h2 className="card_details_name">{actress.name}</h2>
                  <p className="card_details_birth">{actress.birth_year}</p>
                  <p className="card_details_nation">{actress.nationality}</p>
                  <p className="card_details_bio">{actress.biography}</p>
                  <p className="card_details_awards">{actress.awards}</p>
                </div>
              </div>
            ))
          }

        </div>

      </div>




      {/* Actors */}
      <h1>Actors</h1>

      <div className="container">

        <div className="row">

          {/* map the array to create a card for every object (actresses) */}
          {
            actors.map(actor => (
              <div key={actor.id} className="card">
                <div className="card_image">
                  <img src={actor.image} alt={actor.name} />
                </div>
                <div className="card_details">
                  <h2 className="card_details_name">{actor.name}</h2>
                  <p className="card_details_birth">{actor.birth_year}</p>
                  <p className="card_details_nation">{actor.nationality}</p>
                  <p className="card_details_bio">{actor.biography}</p>
                  <p className="card_details_awards">{actor.awards}</p>
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
