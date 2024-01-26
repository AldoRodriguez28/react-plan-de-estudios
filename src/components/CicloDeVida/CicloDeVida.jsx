import React, { useState, useEffect, useRef } from 'react'
import './cicloDeVida.css'
import cicloVidaComponente  from '../../../src/Assets/images/cicloVidaComponente.webp'
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario

export default function CicloDeVida() {

    const code = `import React, { useState, useEffect, useRef } from 'react'
    import './cicloDeVida.css'
    
    export default function CicloDeVida() {
        const [hora, setHora] = useState(new Date().toLocaleTimeString());
        const temporizadorRef = useRef(null);
    
        useEffect(()=>{
            console.log('montando componente')
            iniciar();
    
    
            return () => {
                console.log('Componente desmontado');
                detener();
              };
        },[]);
    
        useEffect(()=>{
            iniciar();
            console.log('actualizando componente')
    
        },[hora]);
    
        let tictac = ()=>{
        if(temporizadorRef.current === null){
            temporizadorRef.current = setInterval(()=>{
                  setHora(new Date().toLocaleTimeString());
              },1000);
        }
        }
        let iniciar =()=>{
            tictac();
        }
        let detener = ()=>{
            console.log('detener');
            if (temporizadorRef !== null) {
                clearInterval(temporizadorRef.current);
                temporizadorRef.current = null;
              }else{
                console.log('no se detuvo')
              }
        }
    
    
      return (
        <>
            <div className="container">
                <div className="title_ciclo_de_vida">
                    <h3>Ciclo De Vida de un componente</h3>
                </div>
                <article>
                    <p>El ciclo de vida de un componente en React consta de tres fases: montaje, actualización y desmontaje. Algunos métodos importantes incluyen <code>componentDidMount</code> , <code>componentDidUpdate</code> , y <code>componentWillUnmount</code>.</p>
                </article>
                <div className="body_ciclo_de_vida">
                   <pre>
                    <code>Si revisas la consola del navegador podrás notar </code>
                   </pre>
                    <div className="time">
                        <h3>{hora}</h3>
                    </div>
                    <div className="actions">
                        <button onClick={iniciar}>iniciar</button>
                        <button onClick={detener}>detener</button>
    
                    </div>
                </div>
            </div>
        </>
      )
    }
    `;
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const temporizadorRef = useRef(null);

    useEffect(()=>{
        Prism.highlightAll();
        console.log('montando componente')
        iniciar();


        return () => {
            console.log('Componente desmontado');
            detener();
          };
    },[]);

    useEffect(()=>{
        iniciar();
        console.log('actualizando componente')

    },[hora]);

    let tictac = ()=>{
    if(temporizadorRef.current === null){
        temporizadorRef.current = setInterval(()=>{
              setHora(new Date().toLocaleTimeString());
          },1000);
    }
    }
    let iniciar =()=>{
        tictac();
    }
    let detener = ()=>{
        console.log('detener');
        if (temporizadorRef !== null) {
            clearInterval(temporizadorRef.current);
            temporizadorRef.current = null;
          }else{
            console.log('no se detuvo')
          }
    }


  return (
    <>
        <div className="container container_main">
            <div className="title">
                <h3>Ciclo De Vida de un componente</h3>
            </div>
            <article className='description'>
                <p>El ciclo de vida de un componente en React consta de tres fases: montaje, actualización y desmontaje. Algunos métodos importantes incluyen <code>componentDidMount</code> , <code>componentDidUpdate</code> , y <code>componentWillUnmount</code>.</p>
                <hr />
                <img height="400" width="100%" src={cicloVidaComponente} alt="cicloVidaComponente" />
                
                
                <hr />
                <p>a continuación encontrar un reloj digital, ejercicio con el cual trataremos de explicar el ciclo de vida de un componente en react:</p>

            </article>
            <div className='container_exercise'>
            <div className="time">
                <h3>{hora}</h3>
            <div className="actions">
                <button onClick={iniciar}>iniciar</button>
                <button onClick={detener}>detener</button>

            </div>
            </div>
            <article>
                    en el codigo que veremos acontinuacion podremos notar que ocupamos <code>useEffect</code>
                    para simular los eventos de <code>montado</code>  y <code>desmontado</code>  de componentes
                    <strong>"en consola del navegador podras notar el orden en que se ejecutan cada uno de estos metodos."</strong> 
                </article>
            </div>
            <hr />
            <div className="body_ciclo_de_vida">
              
               <pre>
               <code className="language-javascript">
                        <br />
                        {code}
                        <br />
                    </code>
               </pre>
               <hr />
         
            </div>
        </div>
    </>
  )
}
