import React,{useEffect,useRef} from 'react';
import imgSrc from '../../../Assets/images/useRef.jpeg'
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario



export default function UseRefComponent() {
    let code = `
import React,{useEffect,useRef} from 'react';
import imgSrc from '../../../Assets/images/useRef.jpeg'
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario


export default function UseRefComponent() {
    //case #1 reference DOM
    const imgRef = useRef()
    //case 2 reference value that doesnt cause re-render
    const mouseOverCount = useRef(0);
    
  return (
    <div className='container'>
        <h3>UseRefComponent</h3>
        <div className="d-flex gap-3 align-items-center">
            <img src={imgSrc}
            height="200" 
            width="auto"
            alt="imagen para ejemplo de use ref" 
            ref={imgRef}
            style = {{filter: 'grayscale(1)' }}
            onMouseOver={()=>{imgRef.current.style.filter = 'grayscale(0%)'}}
            onMouseOut={() => {imgRef.current.style.filter = 'grayscale(1)'}}
            />
            <span><i>Pon el mouse sobre la image  para verla a color y quita el mouse de la imagen para verla en escala de grises</i></span>

        </div>
        <button onClick={()=>{alert("registrado MouverCounter:" +mouseOverCount.current)}}>Registrar</button>

        <div className="languaje-javascript">
            <pre>
                <code>
                    
                </code>
            </pre>
        </div>
        <hr />
        <br />
        <br />
        <hr />


    </div>
  )
    `
    //case #1 reference DOM
    const imgRef = useRef()
    //case 2 reference value that doesn`t cause re-render
    const mouseOverCount = useRef(0);

    useEffect(()=>{
        Prism.highlightAll();
    },[])
  return (
    <div className='container'>
        <h3>UseRefComponent</h3>
        <div className="d-flex gap-3 align-items-center">
            <img src={imgSrc}
            height="200" 
            width="auto"
            alt="imagen para ejemplo de use ref" 
            ref={imgRef}
            style = {{filter: 'grayscale(1)' }}
            onMouseOver={()=>{
                imgRef.current.style.filter = 'grayscale(0%)';
                mouseOverCount.current++;
            }}
            onMouseOut={() => {imgRef.current.style.filter = 'grayscale(1)'}}
            />
            <span><i>Pon el mouse sobre la image  para verla a color y quita el mouse de la imagen para verla en escala de grises</i></span>

        </div>
        <button onClick={()=>{alert("registrado MouverCounter:" +mouseOverCount.current)}}>Registrar</button>

        <div className="language-javascript">
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
        <hr />
        <br />
        <br />
        <hr />


    </div>
  )
}
