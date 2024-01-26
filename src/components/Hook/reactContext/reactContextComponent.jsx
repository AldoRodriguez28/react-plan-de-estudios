import React from 'react'

export default function reactContextComponent() {
  return (
    <div className='container'>
        <h3>React Context Component</h3> 
        <article>
        <h5>¿Que es React Context?</h5>
        <p>
        React context se usa para compartir data entre componentes y se asigna un Objecto de javascript a el.
        Todos los componentes debajo de nuestra jerarquía tienen acceso a ese objeto de javascript asignado.
        <br /><br />
        El patron que react Context usa para trabajar con data es comúnmente llamado <code>Control de Inversion</code>,
        el control de inversion es usado para incrementar la modularidad de el programa y hacerlo extensible. 

        </p>    
        </article>       
    </div>
  )
}
