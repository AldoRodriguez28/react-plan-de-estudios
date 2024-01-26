import React from 'react'

export default function HooksInReactComponent({data_hooks}) {
    
  return (
    <div className='container'>
        <h3>
            los 15 hooks incorporados en <code>REACT</code>.
          </h3>
        <ul className='justify-content-around'>
                {data_hooks.map((typeHook, index) => {
                    return(
                    <li key={"typeHook_"+index}>
                      <h4  >{typeHook.name}</h4> 
                            <ol>
                                {
                                typeHook.data.map((hook, index) => {
                                    return(
                                    <li key={"hook_"+index}>
                                        {hook}
                                    </li>
                                 ) })
                                }
                            </ol>
              
                  </li> 
                    )
                })}
        </ul>

    </div>
  )
}
