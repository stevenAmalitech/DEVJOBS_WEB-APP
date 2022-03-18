import "./Description.css"

const Description = ({posted,contract,position,location,description,reqcontent,reqitems,rolcontent,rolitems}) => {
  return (
    
    <div className="desc_rectangle">
        <div className="desc_innergroup">
          <div className="desc_postedContract">
            {posted} . {contract}
          </div>
          <div className="desc_role">
           {position}
           </div>
           <div className="desc_location">
              {location}
           </div>
           <button className="desc_button"><p className="desc_button_text">Apply Now</p></button>
           <p className="desc_description">{description}</p>
            <p className="desc_requirements">Requirements</p>
            <p className="desc_description" style={{marginTop:'23px'}}>{reqcontent}</p>
            <ul className="desc_description" style={{marginTop:'24px'}}>
            {reqitems.map((elem) => (
          <li style={{marginLeft:'20px'}}>{elem}</li>
        ))}
            </ul>

            <p className="desc_requirements" style={{marginTop:'48px'}}>What You Will Do</p>
            
            <p className="desc_description" style={{marginTop:'28px'}}>{rolcontent}</p>
           
           <ol className="desc_description" style={{marginTop:'24px'}}>
           {rolitems.map((elem) => (
          <li style={{marginLeft:'20px'}}>{elem}</li>
        ))}
           </ol>

       </div>

       

    </div>
    
  )
}

export default Description