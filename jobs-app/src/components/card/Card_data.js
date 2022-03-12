import Card from './Card';
const jobs = require('../../data.json')

function Card_data() {

  return (
    <>
       
         {jobs.map((job)=>(
        
        <Card logo={job.logo} key ={job.id} color={job.logoBackground} posted={job.postedAt} contract={job.contract} position={job.position} company={job.company} location={job.location}/>

      ))}

    </>
  )
}

export default Card_data