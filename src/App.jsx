import { useState } from "react"
import { formatDistanceToNow } from "date-fns";

export default function App() {

  const [gittens, setGittens] = useState('')
  const [result, setResult] = useState([])

  const ThePhone = async (e) => {
    e.preventDefault()
    const response = await fetch (`https://api.github.com/users/${gittens}`)
    const data = await response.json()
    console.log(data)

    if (data.message == "Not Found"){
      alert("Oops... No account was found!")
    }

    if (response.ok){
      setResult([data])
    }
  }

  return (
    <>
        <div className="div">
          <h1>Check Github profile</h1>
              
          <input 
          type="text" 
          onChange={(e) => setGittens(e.target.value)} 
          value={gittens}
          />

          <button onClick={ThePhone}>Check it</button>

          {result && result.map((r) => (
              <div key={r.id}>
                  <h1>{r.name}</h1>
                  <h3>{r.bio}</h3>
                  <h3>{r.blog}</h3>
                  <h3>{r.location}</h3>
                  <img src={r.avatar_url} alt="Profile Picture" />
                  <h2>{r.followers} followers</h2>
                  <h2><a href={r.html_url}>Link to account</a></h2>
                  <h2>Created account {r.created_at}, {formatDistanceToNow(new Date(r.timestamps), {addSuffix: true})}</h2>
              </div>
          ))}
        </div>
    </>
  )
}

