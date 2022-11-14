const Button = ({ text, classBtn, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`btn ${classBtn} ms-3`}>{text}</button>
    </>
  )
}
export default Button