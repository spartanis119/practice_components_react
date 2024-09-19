export const FirstComponent = () => {

  // Logicas se hace arriba del return

  const name = 'Daniel Camargo';
  const github_profile = 'https://github.com/spartanis119';
  return (
    <>
      <div>FirstComponent</div>
      <div className="container bg-dark text-light">
        <h1>Temas de react</h1>
        <ul>
          <li>Componentes</li>
          <li>Eventos</li>
          <li>Estados/Hooks</li>
          <li>Props</li>
        </ul>
      </div>
      <div className="container bg-dark text-light">
        <h1>Datos del docente</h1>
        <ul>
          <li> <strong>{ name }</strong></li>
          <li>{ github_profile }</li>
        </ul>
      </div>
    </>
  )
}
