import Card_data from './components/Card_data';
import {useState} from 'react';




function App() {
const jobs = require('./data.json')
const [jobs1,setJobs] = useState(jobs);

  return (
    <>
      <Card_data jobs={jobs1}/>

    </>
  );
}

export default App;
