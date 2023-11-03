import React, { useState } from 'react'
import "./ColorsCard.css"

const colorHexCodes = [
    "#FF5733",
    "#42EADD",
    "#FCBF49",
    "#D81159",
    "#8F2D56",
    "#5758BB",
    "#004E98",
    "#F0A202",
    "#3F4D9A",
    "#FF6B6B",
    "#6A0572",
    "#AB83A1",
    "#FECB89",
    "#FFF44F",
    "#2EC4B6",
    "#FFC3A0",
    "#457B9D",
    "#DB6400",
    "#FB5012",
    "#83070D",
    "#1D3461",
    "#B09F91",
    "#6B4226",
    "#E2C044",
    "#5D576B"
];


export const ColorsCard = () => {

    const [color,setColor]=useState(0)
function randomColor (){
    let currentColor=Math.floor(Math.random()*colorHexCodes.length);
setColor(currentColor)
}
function firstColors(){
  let currentColor=Math.floor(Math.random()*colorHexCodes.length);
  return colorHexCodes[currentColor]
}



  return (
    <div  className='d-flex  p-4'>
      <div style={{backgroundColor:color? colorHexCodes[color] : firstColors()} } onClick={randomColor} className='mycard    rounded-3'></div>  
    </div>
  )
}
