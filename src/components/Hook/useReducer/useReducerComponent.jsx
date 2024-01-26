import React, {useReducer } from "react";
import CodeComponent from "../../CodeComponent/CodeComponent";


const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export default function useReducerComponent({code}) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
         <h3>useReducer</h3>
            <article>
              <p>
                <code>useReducer</code> es otro hook de React, que se utiliza
                para gestionar el estado de un componente de manera mas compleja
                y estructurada, especialmente cuando el estado depende de
                acciones multiples o cuando la lógica de actualización del
                estado es mas avanzada.
                <br />
                <br />
                En lugar de manejar el estado directamente con{" "}
                <code>useState</code>, el manejo del estado con useReducer,
                acepta un reductor (un funcion) y un estado inicial, y devuelve
                el estado actual junto con una funcion de despacho (dispatch)
                que se utiliza para enviar acciones al reductor.
                <br />
                <br />
                La ventaja de <code>useReducer</code> radica en su capacida para
                manejar logica de estado, espcualmente cuando hay una serie de
                acciones diferentes que pueden afectar al estado de un
                componente. Esto puede hacer que el codigo sea mas estructurado,
                mas facil de entender y mantener, especialmente en aplicaciones
                con logica de estado mas avanzada.
                <br />
                <br />
                En resumen <code>useReducer</code> es util cuando se necesita
                gestionar el estado de un componente de manera mas sofisticada y
                estructurad, proporcionando un enfoque mas declarativo para
                manejar cambios en el estado.
              </p>
              <span>
                a continuacion tenemos un ejemplo de como utilizar useReducer
              </span>

              <div className="body_ciclo_de_vida">
              <CodeComponent code={code} /> 
                <hr />
              </div>
            </article>
      <br />
      <h5>useReducer Componente</h5>
      <p>Contador: {state.count}</p>
      {/* Botones que despachan acciones al reductor */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Resetear</button>
    </div>
  );
}
