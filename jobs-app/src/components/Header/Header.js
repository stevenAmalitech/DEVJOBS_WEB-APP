import React from 'react'

const Header = () => {
  return (

    <div className="container">
        <div className="row">
        <div className="scoot-box col-2">
            <div className="scoot-name-orange ">
               scoot
               
            </div>
            </div>
        <div className="col-8 middle">
            <h5 className="middle-text">Scoot</h5>
            <p className="middle-low-text">scoot.com</p>
        </div>
        <div className="col-2 bg">
        <button type="button" class="btn btn-primary btn-sm">Company Site</button>
        </div>
        </div>
        
    </div>
  )
}

export default Header;