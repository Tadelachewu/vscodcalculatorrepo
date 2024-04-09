import React , {useState} from 'react';
import './Calc.css';
function Calcu(){
    const [value,setValue]=useState("");
    const [result,setResult]=useState("");
   const handleClick=(v)=>{
  //setValue((val)=>v+val);
 }
 //proof git
 const clear=()=>{
  setValue(" ");
   setResult(" ");
 }
 const back=()=>{
    setValue((val)=>{ val.slice(0,-1);})
}

 
 const calculate=()=>{
try{
    setResult(eval(value));
}
catch(error){
    setResult('error');
}

 }
    return (
 <div>
<div className="disp">
   <input  type='text' value={value} readonly/>
</div>
 <div className="cal">
<button onClick={handleClick('0')}> 0</button>  
  <button onClick={handleClick('1')}> 1</button>  
  <button onClick={handleClick('2')}> 2</button>  
  <button onClick={handleClick('3')}> 3</button>  
  <button onClick={handleClick('4')}> 4</button>  
  <button onClick={handleClick('5')}> 5</button>  
  <button onClick={handleClick('6')}> 6</button>  
  <button onClick={handleClick('7')}> 7</button>
  <button  onClick={handleClick('8')}> 8</button>  
  <button  onClick={handleClick('9')}> 9</button>  
  <button  onClick={handleClick('-')}> -</button>  
  <button  onClick={handleClick('+')}> +</button>  
  <button  onClick={handleClick('/')}> /</button>  
  <button  onClick={handleClick('*')}> *</button>  
  <button  onClick={calculate}> =</button>
  <button  onClick={handleClick('.')}> .</button> 
  <button  onClick={back}> X</button>  
  <button  onClick={clear}> DELETE</button>  
  <button  onClick={handleClick('')}> sin</button>  
  <button  onClick={handleClick('')}> cos</button>
  <button  onClick={handleClick('')}> tan</button>  
  <button onClick={handleClick('')}> log</button>  
  <button onClick={handleClick('')}> e</button>  
  <button onClick={handleClick('')}> ln</button>
  <button  onClick={handleClick('')}> sqrt</button>  
  <button  onClick={handleClick('')}> cbrt</button>
  <button  onClick={handleClick('')}> ^</button>  
  <button  onClick={handleClick('')}> abs</button>  
  <button  onClick={handleClick('')}> ceil</button>
  <button  onClick={handleClick('')}> floor</button>  
 </div>
 </div>
    );
}

export default Calcu;