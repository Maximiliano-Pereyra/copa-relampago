import React from "react";
import './portada.css';
import { useState } from "react";
import { useEffect } from "react";

export default function Portada(){
    let [counter, setCounter] = useState(0)
    let [id, setId] = useState(0)
  
    const imagenesPortada = 
    [
      "./portadaCPR1.jpg",
      "./portadaCPR2.jpg",
      "./portadaCPR3.jpg",
      "./portadaCPR4.jpg",
      "./portadaCPR5.jpg",
      "./portadaCPR6.jpg",
      "./portadaCPR7.jpg",
      "./portadaCPR8.jpg"
    ]
  
    useEffect(()=>{
      let idInterval = setInterval(()=>{
        setCounter(counter + 1)
        if(counter === imagenesPortada.length - 1){
          setCounter(0)
        }
    },5000)
      setId(idInterval)
      return clearInterval(id)
    },[counter])
   
  
    return (
      <div className="contenedorPortada">
 
          <img className="imgsPortada" src={imagenesPortada[counter]} alt="" />

        <div className="subscribe">
      <a href="#" className="custom-btn btn-8"><span>Información sobre torneos</span></a>
      <a href="#" className="custom-btn btn-8"><span>Visitá la página web</span></a>
      <a href="#" className="custom-btn btn-8"><span>Canal de Youtube</span></a>
     </div>
      </div>
    );
    
}