import React from 'react'
import WithVisitLogging from './Hoc_example/withVisitLogging'
import ComponentFunctional from './Hoc_example/ComponentFunctional';
import CodeComponent from '../CodeComponent/CodeComponent';

export default function HocComponent() {
  const data_code = `import React, { useEffect } from 'react';

  // High Order Component (HoC) para agregar registro de visitas
  const withVisitLogging = (WrappedComponent) => {
    return function WithVisitLogging(props) {
      useEffect(() => {
        console.log(Proyecto nombre_del_proyecto visto");
        // Aquí podrías realizar lógica adicional, como enviar datos de análisis a un servidor.
      }, [props.projectTitle]);
  
      return <WrappedComponent {...props} />;
    };
  };
  
  // Componente funcional que representa un proyecto en el portafolio
  const PortfolioProject = ({ projectTitle, description }) => {
    return (
      <div>
        <h2>{projectTitle}</h2>
        <p>{description}</p>
        {/* Contenido adicional del proyecto */}
      </div>
    );
  };
  
  // Aplicamos el HoC para obtener un nuevo componente
  const ProjectWithVisitLogging = withVisitLogging(PortfolioProject);
  
  // Usamos el componente resultante
  const App = () => {
    return (
      <div>
        <ProjectWithVisitLogging projectTitle="Proyecto A" description="Descripción del Proyecto A" />
        <ProjectWithVisitLogging projectTitle="Proyecto B" description="Descripción del Proyecto B" />
        {/* Agrega más proyectos aquí */}
      </div>
    );
  };
  
  export default App;
  `;
  const ProjectWithVisitLoggin = WithVisitLogging(ComponentFunctional);
  return (
    <div className='container '>
      <div className="title"> 
      <h3>Hight Order Component (<code>HoC</code>)</h3> 
      </div>
      <article>
      <p>Para mi un <code>Hoc</code> es un patron de diseño en react que se ocupa para reutilizar logica y compartir comportamientos entre componente 
       <br />
       Este patron de diseño permite la composicion de componentes al envolver un componente dentro de una funcion que agrega funcionalida adicional  o
       comportamiento . este enfoque promueve la reutilizacion de codigo y mejora la legibilidad y mantenibilidad del codigo al separar las preocupaciones.

      El <code>HoC</code> se basa en el principio de que una funcion toma un componente y devuelve un nuevo componente
      con funcionalidades adicionales.Pueden encapsular logica comun manejar estados o props compartidos, proporcionar comportamiento 
      específicos sin modificar directamente el componente envuelto
      </p>
      </article>
      <ProjectWithVisitLoggin  projectTitle="HoC" description="descripcion de HOC"/>
      <CodeComponent code={data_code} /> 
<br />
      <span><i>En este ejemplo:</i></span>
      <br />
      <br />
      <ol>
        <li><code>withVisitLogging</code> es el HoC que agrega la funcionalidad de registro de visitas.</li>
        <li><code>PortfolioProject</code>  es un componente funcional que representa un proyecto en el portafolio.</li>
        <li> <code>ProjectWithVisitLogging</code>  es el resultado de aplicar el HoC a PortfolioProject.</li>
      </ol>

      <span>Cada vez que se visualiza un proyecto en el portafolio, se registra un mensaje en la consola indicando el título del proyecto. Este es solo un ejemplo simple para ilustrar cómo puedes usar HoCs para agregar funcionalidades específicas a los componentes de tu portafolio. Puedes adaptar esta idea a tus necesidades específicas.</span>
      <br />
      <br />
    </div>
  )
}
