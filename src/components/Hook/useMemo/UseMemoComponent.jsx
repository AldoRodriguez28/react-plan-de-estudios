import React from 'react'
import SumCalculatorComponent from '../../SumCalculator/SumCalculatorComponent'

export default function UseMemoComponent() {
  return (
    <div className='container'>
        <h3>use Memo</h3>
        <article>
            <code>useMemo</code> es un hook que se utiliza para memorizar el resultado de una funciona de alto valor de procesamiento
            ,evitando que se recalcule en cada renderizado a menos que las dependencias especificas cambien.En otras palabras
            <code>useMemo</code> memoriza el resultado de una funcion y lo almacena para su reutilizacion, si las dependencias no han cambiado, ayudando a 
            optimizar el rendimiento en situaciones donde el calculo es intensivo. 
        </article>
        <br />
        <SumCalculatorComponent n={0}/>
    </div>
  )
}
