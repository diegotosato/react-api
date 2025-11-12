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

      <div className="card">
        <div className="img"></div>
        <div className="dati_attrice">
          <h3>nome</h3>
          <p>anno_nascita</p>
          <p>nazionalita</p>
          <p>biografia</p>
          <p>riconoscimenti</p>
        </div>
      </div>
    </>
  )
}

export default App
