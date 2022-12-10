import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="d-flex flex-column align-items-center my-5">
      <p>Version 1.0.0</p>
      <p>Made by Love</p>
      <Link to="/" className="btn btn-danger">Back</Link>
</div>
  )
}

export default About