import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor}) {
  const headerStyles = {
   backgroundColor: bgColor,
   color: textColor, 
    
  }
  return (
   <>
      <header style={headerStyles}>
        <img src="assets/ouilogo.jpg" className= "headerlogo" width="60px" height="60px" />
        <div className="container">
          
          <h2>{text}</h2>
     </div>
    </header>
  </>
  )
}

Header.defaultProps = {
  text: 'Quejas y Sugerencias',
  bgColor: 'black',
  textColor: 'goldenrod',
  
}
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor : PropTypes.string,
}
export default Header