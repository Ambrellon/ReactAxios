import axios from "axios";
import { useEffect, useState } from "react";

function Poke() {

    const [poke, setPoke] = useState();
    const [name, setName] = useState("sneasel");

    useEffect(() => {
        console.log("Loaded");
        const getPoke = async () => {
            try {
                const res =  await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
                console.log("RESPONSE:", res);
                setPoke(res.data);
            } catch(err) {
                // error handling
            }
        }
        getPoke();
    }, [name]);

    if (poke) {
        return ( 
            <>
                <label htmlFor="pokeName">Name:</label>
                <input type="text" id="pokeName" value={name} onChange={e => setName(e.target.value)} />
                <h2>{poke.name}</h2>
                <img style={{float: "left"}} src={poke.sprites.front_shiny} alt="pokemon"/>
                <section>
                    <p>Height: {poke.height}</p>
                    <p>Weight: {poke.weight}</p>
                    <p>Types: {`${poke.types[0].type.name}`}</p>
                </section>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
}

export default Poke;