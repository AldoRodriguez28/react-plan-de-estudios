import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario


export default function useStateComponent() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("");
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        Prism.highlightAll();
        const fetchData = async ()=>{
            try {
                const response  = await axios.get("https://api.chucknorris.io/jokes/random");
                console.log(response)
                setJoke(response.data.value)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
            }
        }
    // Llama a la función de obtención de datos al montar el componente
    fetchData();
      }, []);
    
   

let handleChange =(event)=>{
    event.preventDefault();
    if (event.target.name === "name"){
        setName(event.target.value)
    }else{
        setLastName(event.target.value);
    }
}

  return (
    <>
        <div className="container">
        <section id="useState">
            <h4>
              Simple <code>useState</code> and <code>LifeCycle</code> Management
            </h4>
            <br />
            
            <h4>Las 3 reglas de React Hooks</h4>
            <ol>
              <li>
                Hooks solo pueden ser llamados dentro de un{" "}
                <code>Function React Component</code>.
              </li>
              <li>Hooks no podran ser llamados condicionalmente.</li>
              <li>
                Hooks solo pueden ser llamado en el nivel superior de un{" "}
                <code>Function Component</code>.
              </li>
            </ol>
          </section>
            <div>
                <h3>Use State consumiendo API con AXIOS</h3>
                <h4>Broma de chuck norris API</h4>
                {loading ? <p>cargando...</p>: <p>{joke}</p> }
            </div>

            <hr />
            <input type="text" name="name" id="name" value={name} onChange={handleChange}  />
            <br />
            <hr />
            <input type="text" name="last-name" id="last-name"  value={lastName} onChange={handleChange} />
            <hr />
            <p>Nombre del usuario: <strong>{name +" "+ lastName}</strong> </p>
            <span>en el ejemplo anterior podemos observar como mantenemos el estado de cada input independiente utilizando <code>useState</code>
            y solo renderizamos la seccion que a cambiado de dicho estado.
            </span>
            <br />
            <code className="language-javascript">
                <br />
                
                {`   const createSecret = (secret) => {
        return {
            getSecret: () => secret,
            setSecret: (newSecret) => {
                secret = newSecret;
            },
        };
    };

    const mySecret = createSecret("My secret");
    console.log(mySecret.getSecret()); // My secret

    mySecret.setSecret("My new secret");
    console.log(mySecret.getSecret()); // My new secret
    }`
}
                <br />
            </code>

        </div>

    </>
  )
}
