import Button from './Button'

const Header = () => {
  return (
    <div className="container my-3 d-flex justify-content-around align-items-center">
      <h1>College Scheduler</h1>
      <Button text={'Add'} classBtn={'btn-secondary btn-lg'} />
    </div>
  )
}

export default Header
