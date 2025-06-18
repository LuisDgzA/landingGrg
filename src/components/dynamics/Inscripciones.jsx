import { useEffect, useState } from "react"

export default function Inscripciones() {
    const [count, setCount] = useState(0)
    const [arregloPoke, setArregloPoke] = useState([])
    useEffect(async() => {
        console.log('cargó')
        const randInt = Math.floor(Math.random() * 2) + 1;
        console.log("🚀 ~ useEffect ~ randInt:", randInt)
        let url = "";
        if(randInt === 1){
            url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
        }else{
            url = 'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0'
        }
        let response = await fetch(url);
        let data = await response.json()
        console.log(data)
        setArregloPoke(data.results)
    },[])
    const increment = () => {
        setCount(count => count + 1)
    }
    return (
        <>
            {
                arregloPoke.map(poke => (
                    <div>{poke.name}</div>
                ))
            }
            <div >{count}</div>
            <button onClick={increment}>incrmentar</button>
        </>
    )
}
