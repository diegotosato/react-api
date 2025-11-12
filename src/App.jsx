import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  //AjaxCall#1 endpoint into a variable
  const actressesEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'

  //variable to collect ajax call content with initial state of empty array
  const [actresses, setActresses] = useState([])

  // function to do the ajax call
  function handleActresses() {
    axios.get(actressesEndpoint)
      .then(res => setActresses(res.data))
  }
  //manage the function to be done only one time at the load of the component
  useEffect(handleActresses, [])
  console.log(actresses);





  //AjaxCall#2 endpoint into a variable
  const actorsEndpoint = 'https://lanciweb.github.io/demo/api/actors/'

  //variable to collect ajax call content with initial state of empty array
  const [actors, setActors] = useState([])

  // function to do the ajax call
  function handleActors() {
    axios.get(actorsEndpoint)
      .then(res => setActors(res.data))
  }
  //manage the function to be done only one time at the load of the component
  useEffect(handleActors, [])
  console.log(actors);




  //emprty array to collect the two precedent arrays
  const allActors = []

  //function to puh the two arrays into the empty third
  allActors.push(...actresses, ...actors)

  console.log(allActors);



  const awards = []



  console.log(typeof (awards));


  return (
    <>
      {/* Actress */}
      <h1>All Actors</h1>

      <div className="container">

        <div className="row">

          {/* map the array that contain both two precedent */}
          {
            allActors.map((actor, index) => (
              <div key={index} className="card">
                <div className="card_image">
                  <img src={actor.image} alt={actor.name} />
                </div>
                <div className="card_details">
                  <h2 className="card_details_name">{actor.name}</h2>
                  <p className="card_details_birth">{actor.birth_year}</p>
                  <p className="card_details_nation">{actor.nationality}</p>
                  <p className="card_details_bio">{actor.biography}</p>
                  <p className="card_details_awards">{actor.awards}</p>
                  <p className="card_details_known">Known for:
                    <ul>
                      {
                        (actor.most_famous_movies || actor.known_for).map((movie, i) => (
                          <li key={i}>{movie}</li>
                        ))
                      }
                    </ul>
                  </p>
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
