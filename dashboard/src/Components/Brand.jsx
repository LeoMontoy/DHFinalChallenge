import React,{useState,useEffect} from "react";
import '../assets/css/ContentWrapper.css'

function Brand(){

  const [brands, setUsers] = React.useState([])

  React.useEffect(()=>{
      console.log('useEffect')
      document.title = 'Dashboard de usuarios'
      obtenerDatos()
  }, [])

  const obtenerDatos = async() => {
      const data = await fetch ('http://localhost:9000/brand')
      const marcas = await data.json()
      console.log(marcas)
      setUsers(marcas)
  }
      

    return(
       <div className="tableContainer">
        <h1>Productos por marca</h1>
        <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Marca</th>
      <th scope="col">Cantidad</th>
    </tr>
  </thead>
  <tbody>
    {
      brands.map(item=>(
        <tr>
        <td>{item.name}</td>
        <td>{item.count}</td>
      </tr>
      ))
    }      
  </tbody>
</table>
       </div>
    )
    
}

export default Brand