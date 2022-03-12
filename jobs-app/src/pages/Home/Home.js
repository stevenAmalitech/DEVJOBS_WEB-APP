import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import data from "../../data.json";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const [jobs, setJobs] = useState(data);

  const filterJobs = ({ term, location, fullTime }) => {
    let filteredJobs = data;

    if (location)
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())
      );

    if (fullTime)
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");

    if (term)
      filteredJobs = filteredJobs.filter((job) => {
        const string = (job.position + job.company).toLocaleLowerCase();

        return string.includes(term.toLocaleLowerCase());
      });

    setJobs(filteredJobs);
  };

  return (
    <div className="Home">
      <SearchBar
        filter={(searchFields) => filterJobs(searchFields)}
      ></SearchBar>

      <div className="cards">
        {jobs.map((job) => (
          <Card
            logo={job.logo}
            key={job.id}
            color={job.logoBackground}
            posted={job.postedAt}
            contract={job.contract}
            position={job.position}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
