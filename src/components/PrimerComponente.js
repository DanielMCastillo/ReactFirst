import React, {useState} from 'react';

const PrimerComponente = () => {

    //let nombre = "Daniel";
    let web = "danielcastweb.es"
    let cursos =[
        "Curso Python desde 0",
        "Curso HTML",
        "Curso de React",
        "Curso CSS"
    ];

    const cambiarNombre = (nuevoNombre) =>{
        setNombre(nuevoNombre);
    }

    const [nombre, setNombre] = useState("Daniel")

  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es mi texto del componente</p>
        <p>Mi nombre es {nombre}</p>
        <p>Mi web es {web}</p>
        <button  onClick={e => cambiarNombre("Daniel Castillo Web")}>
            Cambiar nombre
        </button>
        <ul>
            {
                cursos.map((curso, indice) => {
                    return(<li key={indice}>
                        {curso}
                    </li>);
                })
            }
        </ul>
    </div>  
  )
}

export default PrimerComponente
