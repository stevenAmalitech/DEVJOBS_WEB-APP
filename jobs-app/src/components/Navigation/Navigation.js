import "./Navigation.css"
import {BsSunFill, BsFillMoonFill} from "react-icons/bs";

function Navigation() {
  return (
<div className="aaa">
 <p className="name">devjobs</p>
 <div className="switch">
<BsSunFill className="sun" size={20} color='white'/>
<label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
<BsFillMoonFill className="moon" size={16}
color='white'/>
 </div>

</div>
  )
}

export default Navigation;