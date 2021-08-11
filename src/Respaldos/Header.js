const Header = (props) =>{
return(
  <header>
  <h1>Encabezado {props.title}</h1>
  </header>
)
}

Header.defaultProps={
  title:'Título por defecto'
}


export default Header
