import { React, useEffect, useState } from "react";
import UseStateComponent from "./useState/useStateComponent";
import UseReducerComponent from "./useReducer/useReducerComponent";
import HooksInReactComponent from "./hooks_in_react/HooksInReactComponent";
import hooks_data from "../../Utils/hooks_data";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Ajusta la ruta si es necesario
import "prismjs/components/prism-javascript"; // Ajusta la ruta si es necesario
import UseRefComponent from "./useRef/UseRefComponent";
import UseMemoComponent from "./useMemo/UseMemoComponent";
import UseCallBackComponent from "./useCallback/UseCallBackComponent";


export default function HookComponent({ children }) {
  const [hooks, setHooks] = useState(hooks_data);


  useEffect(() => {
    Prism.highlightAll();
  }, []);
  let code = `import React, { useReducer } from 'react';

  // Definimos el reductor
  const counterReducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };
  
  // Componente que utiliza useReducer
  const Counter = () => {
    // Inicializamos el estado usando useReducer
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
    return (
      <div>
        <p>Contador: {state.count}</p>
        {/* Botones que despachan acciones al reductor */}
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementar</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementar</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Resetear</button>
      </div>
    );
  };
  
  export default Counter;
  `;
  return (
    <>


      <div className="container container_main">
        <div className="title">
          <h3>Hooks</h3>
        </div>
          <p>
            React hook son funciones de <code>JavaScript</code> unicamente
            llamadas por otras funciones de nivel mas alto debiendo comenzar con{" "}
            <code>"Use"</code>.
          </p>

          <p>
            <strong>¿Que beneficios obtenemos con React Hook?</strong>
          </p>
          <ul>
            <li>Reutilizar la logica con estado entre componentes.</li>
            <li>
              Permite un facil desacoplamiento de la logica del codigo de los
              eventos de esta y ciclo de vida de los componentes.
            </li>
            <li>Mejor composicion del codigo.</li>
          </ul>

          <hr /> 
          <UseStateComponent />
          <hr />
          <section id="useEffects">
            <h4>UseEffects</h4>
            <article>
              <p>
                <code>useEffect</code> es un hook de React, que se utiliza para
                realizar efectos secundarios en un componente de tipo función.
                Los efectos secundarios pueden incluir operaciones como la
                suscripción a eventos, la manipulación del DOM, la llamada a
                servicios web, entre otros. Esta hook permite ejecutar código
                adicional después de que un componente ha sido renderizado en el
                navegador.
                <br />
                <br />
                La función que se pasa a <code>useEffect</code> se ejecuta
                después de que la renderización es completad y, opcionalmente,
                puede retornar una función de limpieza para realizar tareas
                limpieza cuando el componente es desmontado o cuando ciertos
                valores cambian.
                <br />
                <br />
                <i>
                  "En resumen <code>useEffect</code> brinda a los
                  desarrolladores un lugar conveniente para manejar tareas
                  asíncronas y realizar efectos secundarios en componentes
                  funcionales en el ciclo de vida de React"
                </i>
              </p>
            </article>
          </section>
          <hr />
          <br />
           
      <UseReducerComponent code={code} />
      <hr />
      <br />  
      <HooksInReactComponent data_hooks={hooks_data} />
      <hr />
      <UseRefComponent />
      <hr />
      <UseMemoComponent />
      <hr /><br />
      <UseCallBackComponent />
      </div>
      

    </>
  );
}
