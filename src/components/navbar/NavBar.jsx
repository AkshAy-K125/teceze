import './navbar.css'
const NavBar = () => {
  return (
    <>
    <div className="NaveContainer">
      <div style={{color:"white"}}>
        Click It
      </div>
      <div>
      <a href="#">Process</a>
      <a href="#">Benefits</a>
      <a href="#">Services</a>
      <a href="#">Portfolio</a>
      <a href="#">FAQ</a>
      <button>Get Started</button>
      </div>
    </div>
    </>
  )
}

export default NavBar