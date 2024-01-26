import React,{useState, useMemo} from 'react'

export default function SumCalculatorComponent({n}) {
    const [number, setNumber] = useState(n);

    const calculateSum = (n) =>{
        console.log('Calculating sum ...');
        return (n * (n + 1)) / 2;
    };

    const sum = useMemo(() => calculateSum(number), [number] )
  return (
    <div>
        <h3>Sum calculator</h3>
        <p>Calcular la suma de los primeros {number} números naturales: {sum}</p>
        <input type="number" 
        value={number}
        onChange={e=>setNumber(parseInt(e.target.value))}
        />
    </div>
  )
}
