import React from 'react'
import CodeComponent from '../CodeComponent/CodeComponent'
import "prismjs/themes/prism.css"; // Ajusta la ruta si es necesario
import "prismjs/components/prism-javascript"; // Ajusta la ruta si es necesario


export default function TDZJs() {
  const code_1 = `import React, { useState } from 'react';

  const MyComponent = () => {
    // Intentamos acceder a una variable de estado antes de su inicialización
    // Esto crea una TDZ
    // const [count, setCount] = useState(initialValue); // Esto causará un error
  
    // Aquí no hay TDZ porque la variable count se inicializa después
    const [count, setCount] = useState(0);
  
    // Al intentar acceder a la variable count antes de su inicialización, se produce un error
    // const doubleCount = count * 2; // Esto causará un error
  
    // Esta función se ejecuta después de que el componente se monta, por lo que no hay TDZ
    const doubleCount = () => {
      return count * 2;
    };
  
    return (
      <div>
        <h1>Valor de count: {count}</h1>
        <h2>Doble de count: {doubleCount()}</h2>
        <button onClick={() => setCount(count + 1)}>Incrementar count</button>
      </div>
    );
  };
  
  export default MyComponent;
  `;
  return (
    <div className='container'>
      <h3 className="title">TDZJs</h3>
      <p>
        <code>TDZ (Temporal Dead Zone)</code> se refiere a un periodo durante la ejecucion de JavaScript en el que una variable declarada con <code>let</code> o <code>const</code>
        es inaccesible y lanzara un error si se intenta acceder a ella antes de su inicializacion.La <code>TDZ</code> existe desde un punto en que la variable 
        es declarada hasta el momento en que se le asigna un valor.
      </p>
      <br />
      En React, la TDZ puede surgir cuando intentas acceder a una variable de estado (<code>'useState'</code>) o una variable declarada con <code>let</code> o <code>const</code> antes de que hayan
      sido inicializadas. Esto puede ocurrir cuando intentas utilizar el valor de una vairbale de estado en el proceso de renderizado antes de antes de haber actualizado su valor.
      <br /><br />
      A continuación, te presento un ejemplo claro de como puede ocurrir esto en React:

      <CodeComponent code={code_1} />
    </div>
  )
}
