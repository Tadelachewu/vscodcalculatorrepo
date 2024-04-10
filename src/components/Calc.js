import React , {useState} from 'react';
import './Calc.css';
function Calcu(){
    var [value,setValue]=useState("");
    var [result,setResult]=useState("");
    var [temp,setTemp]=useState(" ");
   var handleClick=(v)=>{
  setValue((value)=>value+v);
 }
 //proof git
 const clear=()=>{
  setValue(" ");
   setResult(" ");
 }
 

const back = () => {
    setValue((value) => value.slice(0, -1));
  };
 
 const calculate=()=>{
try{setValue(" ");
    setResult(eval(value));
}
catch(error){
    setResult('error');
}

 }
 const sin=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.sin(value)+temp);
 }
 const cos=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.cos(value)+temp);
 }
 const tan=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.tan(value)+temp);
 }
 const log=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.log10(value)+temp);
 }
 const lan=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.log(value)+temp);
 }
 const power=()=>{
  /* setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.sin(value)+temp);*/
 }
 const cuberoot=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.cbrt(value)+temp);
 }
 const floor=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.floor(value)+temp);
 }
 const ceil=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.ceil(value)+temp);

 }
 const squareroot=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.sqrt(value)+temp);
 }
 const expo=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.exp(value)+temp);
 }
 const square=()=>{
   /*setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.sin(value)+temp);*/
 }
 const absolute=()=>{
   setTemp(value);
   setValue(" ");
    setValue(value);
   
    setValue((value)=>Math.abs(value)+temp);
 }

    return (
 <div>
<div className="disp">
   <input  type='text' value={value} readonly/>
</div>
<div className='RES'>
    {result}
</div>
 <div className="cal">
 <button onClick={() => handleClick('0')}>0</button>
<button onClick={() => handleClick('1')}>1</button>
  <button onClick={()=>handleClick('2')}> 2</button>  
  <button onClick={() =>handleClick('3')}> 3</button>  
  <button onClick={() =>handleClick('4')}> 4</button>  
  <button onClick={() =>handleClick('5')}> 5</button>  
  <button onClick={() =>handleClick('6')}> 6</button>  
  <button onClick={() =>handleClick('7')}> 7</button>
  <button  onClick={() =>handleClick('8')}> 8</button>  
  <button  onClick={() =>handleClick('9')}> 9</button>  
  <button  onClick={() =>handleClick('-')}> -</button>  
  <button  onClick={() =>handleClick('+')}> +</button>  
  <button  onClick={() =>handleClick('/')}> /</button>  
  <button  onClick={() =>handleClick('*')}> *</button>  
  <button  onClick={calculate}> =</button>
  <button  onClick={() =>handleClick('.')}> .</button> 
  <button  onClick={back}> X</button>  
  <button  onClick={clear}> DELETE</button>  


  <button  onClick={sin}> sin</button>  
  <button  onClick={cos}> cos</button>
  <button  onClick={tan}> tan</button>  
  <button onClick={log}> log</button>  
  <button onClick={expo}> e</button>  
  <button onClick={lan}> ln</button>
  <button  onClick={power}>pow</button> 
  <button  onClick={squareroot}>sqrt</button> 
  <button  onClick={cuberoot}> cbrt</button>
  <button  onClick={square}> ^</button>  
  <button  onClick={absolute}> abs</button>  
  <button  onClick={ceil}> ceil</button>
  <button  onClick={floor}> floor</button>  
 </div>
 </div>
    );

}

export default Calcu;