import { Link } from "react-router-dom"

const Footer = () => {
  return(
    <footer className="d-flex flex-column align-items-center my-3">
      <p>Copyright &copy; 2022</p>
      <Link to="/About">About</Link>
    </footer>
  )
}

export default Footer