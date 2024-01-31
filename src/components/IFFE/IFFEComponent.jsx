import React, { useEffect } from 'react'
import CodeComponent from '../CodeComponent/CodeComponent'
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Ajusta la ruta si es necesario
import "prismjs/components/prism-javascript"; // Ajusta la ruta si es necesario

export default function IFFEComponent() {
  const code_1 = `import React from 'react';

  const MyComponent = () => {
    // Definimos una IIFE para encapsular lógica adicional dentro del componente
    (function() {
      // Función auxiliar solo necesaria dentro del componente
      function calcularAlgo(a, b) {
        return a + b;
      }
  
      // Lógica adicional dentro de la IIFE
      const resultado = calcularAlgo(5, 10);
      console.log(resultado);
    })();
  
    return (
      <div>
        <h1>Componente de React</h1>
        <p>Contenido del componente...</p>
      </div>
    );
  };
  
  export default MyComponent;
  `;

  useEffect(()=>{
    Prism.highlightAll();
  })
  return (
    <div className='container'>
      <h3 className='title'> IIFE</h3>
      <br /><br />
      <p>
        <code>IIFE</code> significa <span> <i>"Immediately Invoke Function Expression" (Expresión de función invocaba inmediatamente)</i></span>
        es una forma de definir una función en Javascript que se declara inmediatamente después de su definición.

      <br /><br />
      En React, puedes encontrar este IIFEs principalmente cuando se define un componente funciona utilizando la sintaxis de arrow function, por ejemplo :
      </p>
      <CodeComponent code={code_1} />
      <br /><br />
      En el contexto de <code>React</code>, esto puede ser util para encapsular lógica o definir un componente funcional mas complejo 
      que no necesita ser reutilizado en otras partes de la aplicación. Sun embargo en la mayoría de los casos, es mas común definir componentes React como funciones o clases regulares
      y  luego exportarlos para su uso en otros lugares.
    </div>
  )
}
