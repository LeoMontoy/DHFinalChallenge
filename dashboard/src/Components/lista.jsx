import React from "react";

const List = ()=> {

    const [users, setUsers] = React.useState([])

    React.useEffect(()=>{
        console.log('useEffect')
        document.title = 'Dashboard de usuarios'
        obtenerDatos()
    }, [])

    const obtenerDatos = async() => {
        const data = await fetch ('http://localhost:9000/products')
        const usuarios = await data.json()
        console.log(usuarios)
        setUsers(usuarios)
    }
    
    return (
        <div>
            <h1>Sos una masa!</h1>
            <ul>
                {
                    users.map(item=>(
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List