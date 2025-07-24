import React from 'react'
import './footer.css'
const Footer = () => {
  let footerStyle = {
    width: "100%"
  }
  return (
    <footer className='bg-dark text-center text-light p-3 footer-style' style={footerStyle}>
      <p>Copyright &copy; ToDoslist.com</p>
    </footer>
  )
}

export default Footer
