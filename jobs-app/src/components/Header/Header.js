
import "./Header.css"

const Header = ({color,logo,company,website}) => {
  return (

    <div className="container">
        <div className="row">
        <div className="scoot-box col-2">

            <div className="scoot-name-orange" style={{backgroundColor:color}}>
                <img className="header_svg" src ={logo}/>
            </div>
        </div>
        <div className="col-8 middle">
            <p className="middle-text">{company}</p>
            <p className="middle-low-text">{website}</p>
        </div>
        
        <button className="btn-primary"><p className="button_text">Company Site</p></button>
        
        </div>
        
    </div>
  )
}

export default Header;