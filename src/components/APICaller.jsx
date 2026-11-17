import { useState } from "react"

export default function RingRingAPICalling () {
    const [gittens, setGittens] = useState('')
    const [searchResult, setSearchResult] = useState(null);

    const ThePhone = async (e) => {
        e.preventDefault()
        const response = await fetch (`https://api.github.com/users/${gittens}`)
        const data = await response.json()
        setSearchResult(data)
    }

    return(
        <>
        <h1>Check Github profile</h1>
            
        <input 
        type="text" 
        onChange={(e) => setGittens(e.target.value)} 
        value={gittens}
        />

        <button onSubmit={ThePhone}>Check it</button>

        {searchResult && searchResult.map((m) => 
            <p>{m.id}</p>
        )}
        </>


/*  */    )}