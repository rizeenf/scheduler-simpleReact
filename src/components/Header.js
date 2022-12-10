import Button from './Button'

const Header = ({ showAddSch, showBtn }) => {
  return (
    <div className="container my-3 d-flex justify-content-around align-items-center">
      <h1>College Schedule</h1>
      <Button text={showAddSch ? 'Close' : 'Add'} classBtn={`btn-secondary btn-lg ${showAddSch ? 'btn-danger': ''}`} onClick={showBtn} />
    </div>
  )
}

export default Header
 