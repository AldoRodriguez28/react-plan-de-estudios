import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';  // Ajusta la ruta si es necesario
import 'prismjs/components/prism-javascript';  // Ajusta la ruta si es necesario


export default function CodeComponent({code}) {
    useEffect(()=>{
        Prism.highlightAll();
    },[])
  return (
    <div className='container'>
       
        <div className="language-javascript">
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    </div>
  )
}
