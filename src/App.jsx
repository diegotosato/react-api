import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const attriciEndpoint = 'https://lanciweb.github.io/demo/api/actresses/'

  const [attrici, setAttrici] = useState([])

  function handleAttrici() {
    axios.get(attriciEndpoint)
      .then(res => setAttrici(res.data))
  }

  useEffect(handleAttrici, [])
  console.log(attrici);




  return (
    <>
      <h1>API</h1>

      {
        attrici.map(attrice => (
          <div key={attrice.id} className="card">
            <div className="card_image">
              <img src={attrice.image} alt={attrice.name} />
            </div>
            <div className="dati_attrice">
              <h3>{attrice.name}</h3>
              <p>{attrice.birth_year}</p>
              <p>{attrice.nationality}</p>
              <p>{attrice.biography}</p>
              <p>{attrice.awards}</p>
            </div>
          </div>
        ))
      }


    </>
  )
}

export default App
