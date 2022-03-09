const jobs = require('../data.json')
function Card_data() {
  return (
    <div>
       
         {jobs.map((job)=>(
        
        <h3> {job.contract} {job.position} {job.company} </h3>

      ))}

    </div>
  )
}

export default Card_data