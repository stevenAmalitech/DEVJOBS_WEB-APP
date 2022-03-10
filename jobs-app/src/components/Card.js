
const Card = ({posted,contract,position,company,location,color,logo}) => {
  return (
   <div className="main">
     
     <div className="rectangle">
       <div className="innergroup">
          <div className="postedContract">
            {posted} . {contract}
          </div>
          <div className="role">
           {position}
           </div>
           <div className="company">
            {company}
           </div>

           <div className="location">
              {location}
           </div>
       </div>

       </div>
       <div className="logo" style={{backgroundColor:color}} >

     </div>
   </div>
  )
}

export default Card