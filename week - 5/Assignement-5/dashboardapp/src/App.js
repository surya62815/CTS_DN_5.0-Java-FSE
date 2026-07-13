import CohortDetails from "./CohortDetails";

function App() {

  return (

    <div>

      <CohortDetails
        cohortName="React Bootcamp"
        startedOn="10-Jul-2026"
        status="ongoing"
        coach="John"
        trainer="David"
      />

      <CohortDetails
        cohortName="Spring Boot"
        startedOn="01-Jun-2026"
        status="completed"
        coach="Alex"
        trainer="Peter"
      />

      <CohortDetails
        cohortName="Angular"
        startedOn="20-May-2026"
        status="ongoing"
        coach="Chris"
        trainer="Robert"
      />

    </div>

  );

}

export default App;