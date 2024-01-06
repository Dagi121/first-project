import React, { useState } from 'react'

function Usestateobject() {
    const [car, setCar] = useState({
        brand: "Ferarri",
        model: "seweti",
        year: "2024",
        color: "gry"
    })
    const updateColor = () => {
        setCar(previousState => {
        return { ...previousState, brand: "Lamburghini" }
        });
      }
  return (
    <div>
        <h1>my {car.brand} is</h1>
        <button onClick={updateColor}>brand</button>
    </div>
  )
}

export default Usestateobject