
export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert(`Haz hecho click en el boton ${name}`);
  }

  const handleDoubleClicked = () => {
    alert("Has hecho doble click");
  }

  const handleMouseEnter = () => {
    alert(`Has ENTRADO a la casa`);
  }

  const handleMouseLeave = () => {
    alert(`Has SALIDO de la caja`);
  }

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`)
  }

  const handlerInsideInput = () => {
    console.log('Estas dentro del input digita tu nombre');
  }

  const handleOutsideInput = () => {
    console.log("Estás fuera del input, Adiós!!")
  }

  return (
    <div>
      <h1>FourthComponent</h1>
      {/* Evento Click */}
      <button className="btn btn-danger"
        onClick={() => {
          alert('Hola, soy un evento click');
        }}
      >Haz click</button>
      <button className="btn btn-success ms-2"
        onClick={e => handleClicked(e, "Daniel")}
      >Aqui tambien haz click</button>
      <button className="btn btn-info ms-2"
        onDoubleClick={handleDoubleClicked}
      >
        Haz Doble Click!!
      </button>
      <div id="box1" className="mt-4">
        <p onMouseEnter={e => handleMouseEnter(e)}
          onMouseLeave={e => handleMouseLeave(e)}>pasa el mouse por encima</p>
      </div>
      <div id="box2" className="mt-4"
        onMouseEnter={e => handleMouse(e, "Entrado a")}
        onMouseLeave={e => handleMouse(e, "Salido de")}
      >
      </div>
      <div className="mt-4">
        <input type="text"
          onFocus={e => handlerInsideInput(e)}
          onBlur={e => handleOutsideInput(e)}
        />
      </div>
    </div>
  )

}
