import React from 'react'
import CodeComponent from '../CodeComponent/CodeComponent'
import "prismjs/themes/prism.css"; // Ajusta la ruta si es necesario
import "prismjs/components/prism-javascript"; // Ajusta la ruta si es necesario

export default function VariableComponent() {
  const code = `
  ---------- VAR ----------
  var x = 10;
  console.log(x); // 10
  
  if (true) {
    var y = 20;
  }
  
  console.log(y); // 20

  ---------- let ----------
  let a = 10;
  console.log(a); // 10
  
  if (true) {
    let b = 20;
    console.log(b); // 20
  }
  
  console.log(b); // Uncaught ReferenceError: b is not defined
  
  ---------- const ----------
  const PI = 3.14;
  console.log(PI); // 3.14
  
  PI = 3.14159; // Uncaught TypeError: Assignment to constant variable.
  
  const arr = [1, 2, 3];
  arr.push(4); // Esto es válido
  
  arr = [4, 5, 6]; // Uncaught TypeError: Assignment to constant variable.
  
  `;
  return (
    <div className='container'>
      <h3 className="title">Variables JS</h3>
      <article>
        <p>
          La diferencia entre <code>let</code>, <code>const</code> y <code>var</code> en JavaScript
          radica en el alcance y la asignación de valores de las variables.
          <br /><br />
          - <code>var:</code> <br />
          <code>var</code> tiene un ámbito de función o global. Esto significa que la variable declarada con
          <code>var</code> estará disponible en toda la función en la que se declaro, incluso si es dentro de un 
            como un bucle <code>for</code> o una declaración <code>if</code>
<br />
          Las variables <code>var</code> pueden ser redeclaradas y reasignadas dentro de su ámbito.
          ,loas variables <code>var</code> se elevan al principio de su ámbito, lo que significa que pueden ser 
          utilizadas incluso antes de su declaración (aun que su valor sera <code>undefined</code>).
        <br /><br />
        - <code>let:</code><br />
        <code>let</code>tiene un alcance de bloque esto significa que la variable declarada con <code>let</code>
        solo estara disponible dentro del bloque donde fue declarada.
        <br />
        Las variables <code>let</code> pueden ser reasginadas pero no redeclaradas dentro del mismo ámbito.
        <br />
        Las variables <code>let</code> no son elevadas como las variable <code>var</code> lo que significa que no pueden 
        ser utilizadas antes de su declaración.
        <br /><br />
        - <code>const:</code><br />
        <code>const</code> tambien tiene alcance de bloque como <code>let</code>. <br />
        Las variables declaradas con <code>const</code> deben ser inicializadas al momento de la declaracion y no pueden ser reasginadas ni redeclaradas.
        <br />
        sin embargo para objetos y mtrices, la asignacion de <code>const</code> solo impide que se cambie la referencia ala que apunta la variable 
        , pero aun puedes modificar los valores dentro del objeto o matriz.
          
        </p>
        <details>
          <summary>
              <i></i>Ejemplo de <code>var</code>, <code>let</code> y <code>const</code>
            <p>
              <CodeComponent code={code} />
            </p>
          </summary>
        </details>
<br />
<hr />
        <details>
          <summary>
          En resumen 
          </summary>
          <p>
            <code>var</code> tiene un alcance global, <code>let</code> tiene un alcance de bloque y permite la reasignación, mientras que <code>const</code>
            tiene un alcance de bloque y no permite la resignación ni la redeclaración.
          </p>
        </details>
        <br /><br />
      </article>
    </div>
  )
}
