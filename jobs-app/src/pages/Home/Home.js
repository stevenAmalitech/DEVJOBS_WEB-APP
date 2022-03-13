import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import data from "../../data.json";
import Card from "../../components/Card/Card";
import Description from "../../components/Description/Description";
import "./Home.css";

function Home() {
  const [jobs, setJobs] = useState(data);
  const [descriptionData, setDescriptionData] = useState(null);

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

  const displayDescription = (job) => {
    setDescriptionData(job);
  };

  return (
    <div className="Home">
      <SearchBar
        filter={(searchFields) => filterJobs(searchFields)}
      ></SearchBar>

      {!descriptionData ? (
        <div className="cards">
          {jobs.map((job) => (
            <div key={job.id} onClick={() => displayDescription(job)}>
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
            </div>
          ))}
        </div>
      ) : (
        <>
          <button
            className="desc_button df"
            onClick={() => setDescriptionData(null)}
          >
            <p className="desc_button_text">Back</p>
          </button>

          <Description
            posted={descriptionData.postedAt}
            contract={descriptionData.contract}
            position={descriptionData.position}
            location={descriptionData.location}
            description={descriptionData.description}
            reqcontent={descriptionData.requirements.content}
            reqitems={descriptionData.requirements.items}
            rolcontent={descriptionData.role.content}
            rolitems={descriptionData.role.items}
          ></Description>
        </>
      )}
    </div>
  );
}

export default Home;
