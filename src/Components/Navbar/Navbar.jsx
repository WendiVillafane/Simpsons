import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>The simpsons</div>
      <ul className='nav-menu'>
          <li>Resumen</li>
          <li>Personajes</li>
          <li>Home</li>
          <li className='nav-contact'>contact</li>
      </ul>
    </div>
  
  )
}

export default Navbar
