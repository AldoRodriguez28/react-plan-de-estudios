import React, {useEffect} from 'react'
import './closures.css'
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario


export default function ClosuresComponent() {
    useEffect(() => {
        Prism.highlightAll();
      }, []);
  return (
    <>
        <div className='container container_main'>
            <div className="title">
                <h3>Closures </h3>
            </div>
            <article className="descripcion">   
            <h5>¿Que es un Closure?</h5>
            <p>
            Un <code>Closure</code>  le brinda acceso al alcance de una función externa desde una función interna. Cuando las funciones están anidadas, las funciones internas tienen acceso a las variables declaradas en el alcance de la función externa, incluso después de que la función externa haya regresado:
            </p>
            </article>

            <pre>
            <code className="language-javascript">
                    <br />
                    {
                        
    `   const createSecret = (secret) => {
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
    }`}
                </code>
                <br />
            </pre>
            <div className="body_article">
            <p>Las variables de <code>Closures</code>  son referencias vivas a la variable de ámbito externo, no una copia. Esto significa que si cambia la variable de ámbito externo, el cambio se reflejará en la variable de <code>Closures</code>  y viceversa, lo que significa que otras funciones declaradas en la misma función externa tendrán acceso a los cambios.

</p>

            </div>
            
        </div>
    </>
  )
}
