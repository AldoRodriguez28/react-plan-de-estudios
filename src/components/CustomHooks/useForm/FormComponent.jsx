import React from 'react'
import useform from './UseformCustomHook'

export default function FormComponent() {
    const {values, handleChange, handleSubmit, resetForm} = useform({
        nombre:'',
        email:'',
        telefono:'',
        ciudad:''
    })

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" value={values.nombre} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor="email">email</label>
                <input type='email'  name="email" id="email" value={values.email} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor="telefono">telefono</label>
                <input type='tel'  name="telefono" id="telefono" value={values.telefono} onChange={handleChange} />
            </div>
            <div className="row">
                <label htmlFor="ciudad">ciudad</label>
                <input type='text'  name="ciudad" id="ciudad" value={values.ciudad} onChange={handleChange} />
            </div>
            <br />
            <div className="d-flex gap-3">
                <button type="submit">Submit</button>
                <button type='button' onClick={resetForm}>Reset</button>
            </div>
        </form>

    </div>
  )
}
