import { useState } from "react";

const UseForm = (initialState)=>{
    const [values, setValues] = useState(initialState);

    const handleChange = (e) =>{
        setValues({...values ,[e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let isFormValid = true;
        for(const atributtes in values){
            if(values[atributtes].length === 0){
                isFormValid = false
            }
        }
        if(!isFormValid){
            alert("Por favor llena todos los campos")
        }else{
            // values[e.target] === '' ? alert(`el campo ${e.target.name} esta vacio!`): console.log(`campo ${e.target.name} valido`)
                console.log("Form Submitted!", values);  
        }
    
    }

    const resetForm = ()=>{
        setValues(initialState)
    }
    return {
        values,
        handleChange,
        handleSubmit,
        resetForm,
    }
}
export default UseForm;