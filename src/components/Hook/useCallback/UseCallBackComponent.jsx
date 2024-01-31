import React, {useEffect} from 'react'
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario


export default function UseCallBackComponent() {

    useEffect(() =>{
        Prism.highlightAll();
    },[])
  return (
    <div>
        <h3>useCallback</h3>
        <p>
            <code>useCallback</code> se utiliza para memorizar funciones, es especialmente util 
            cuando se pasan funcionnes como parametros a componentes hijos. Al igual que <code>useMemo</code>
            memoriza el resulta de una funcion, <code>useCallback</code> memoriza la funcion en si. Esto es util 
            para evitar que se creen nuevas instancias de funciones en cada renderizado del componente, lo que puede 
            tener un impacto en el rendimiento, espciealmente cuando se utiliza funciones en dependencias de hooks como 
            <code>useEffect</code> o <code>useMemo</code>.
        </p>


        <h4>Ejemplo de <code>useCallback</code></h4>
        <p>supongamos que tienes un componente <i>ParentComponent</i> que renderiza a un <i>ChildComponent</i>y pasa un función como prop</p>.
        <div className="language-javascript">
            <pre>
                <code>
                    {`import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Sin useCallback: cada renderización de ParentComponent crea una nueva instancia de la función handleButtonClick.
  // const handleButtonClick = () => {
  //   console.log('Button clicked!');
  // };

  // Con useCallback: la función se memoiza y solo se crea una nueva instancia si count cambia.
  const handleButtonClick = useCallback(() => {
    console.log('Button clicked! Count:', count);
  }, [count]);

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent handleClick={handleButtonClick} />
    </div>
  );
};

export default ParentComponent;
`}
                </code>
            </pre>
        </div>
        <br />
     <p>
         Y el <i>ChildComponent</i> que recibe la funcion como prop.
    </p>  
    <br />
    <div className="language-javascript">
        <pre>
            <code>
                {`import React from 'react';

const ChildComponent = ({ handleClick }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ChildComponent;
`}
            </code>
        </pre>
    </div>
    <span>En este ejemplo: </span>
    <ol>
        <li>
            Sin <code>useCallback</code>, cada vez que <code>ParentComponent</code> se renderiza, se crea una nueva instancia de  <code>handleButtonClick</code>
            , lo que puede causar que <code>ChildComponent</code> se vuelva a renderizar innecesariamente.
        </li>
        <li>
            Con <code>useCallback</code>,la funcion <code>handleButtonClick</code> se memoriza y solo se crea una nueva instancia si la dependencia (<code>count</code> en este caso) cambia.
            Esto mejora el rendimiento al evitar la creación de nuevas funciones en cada renderizado
        </li>

    </ol>

<br />
    </div>
  )
}
