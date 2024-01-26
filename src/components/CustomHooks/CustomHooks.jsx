import React, {useEffect} from 'react'
import FormComponent from './useForm/FormComponent'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario
import WithVisitLogging from '../Hoc/Hoc_example/withVisitLogging';
import ComponentFunctional from '../Hoc/Hoc_example/ComponentFunctional';


export default function CustomHooks() {
const ProjectWithVisitLogging = WithVisitLogging(ComponentFunctional)
useEffect(()=>{
  Prism.highlightAll();
},[])
  return (
    <div className='container'>
      <div className="title">

      <h3>Custom Hook</h3>
      </div>
      <article>
        <p>
          Un <code>Custom Hook</code> es una función que utiliza los Hooks de React internamente y que esta diseñada 
          para ser reutilizada en multiples componentes.
          Los <code>Custom Hooks</code> permiten encapsular lógica compleja en funciones independientes, facilitando asi la comparticion y reutilización de código entre diferentes componentes

        </p>
        <FormComponent />
        <hr />
        <br />
        <div className="language-javascript">
          <pre>
            <code>
              {`import { useState } from 'react';

// Custom Hook: Encapsula la lógica del formulario
const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with values:', values);
    // Puedes agregar aquí lógica adicional, como enviar los datos a un servidor
  };

  // Función para restablecer los valores del formulario
  const resetForm = () => {
    setValues(initialState);
  };

  // Devuelve los elementos del hook que deseas exponer
  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

// Componente que utiliza el Custom Hook
const FormComponent = () => {
  // Utiliza el Custom Hook para obtener las funciones y el estado del formulario
  const { values, handleChange, handleSubmit, resetForm } = useForm({
    username: '',
    password: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={values.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>
  );
};

export default FormComponent;
`}

            </code>
          </pre>
        </div>
      <ProjectWithVisitLogging projectTitle="CustomHooK" description="revisa la consola para ver cuantos veces haz visitado esta vista" />
      </article>
      <hr /><br />


    </div>
  )
}
