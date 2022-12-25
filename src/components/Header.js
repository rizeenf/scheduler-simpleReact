import Button from './Button'
import { useLocation } from 'react-router-dom';

const Header = ({ showAddSch, showBtn }) => {
  const loc = useLocation();

  return (
    <div className="container my-3 d-flex justify-content-around align-items-center">
      <h1>College Schedule</h1>
      { loc.pathname == '/About' ? '' : <Button text={showAddSch ? 'Close' : 'Add'} classBtn={`btn-secondary btn-lg ${showAddSch ? 'btn-danger': ''}`} onClick={showBtn} />}
    </div>
  )
}

export default Header
 