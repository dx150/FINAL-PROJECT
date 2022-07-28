import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../JS/Actions/OffreActions";

function JobsList() {
  const jobs = useSelector((state) => state.OffreReducer.allJobs);
  const loading = useSelector((state) => state.OffreReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);
  return (
    <div className="bodyCard">
      {loading ? (
        <span className="loader">Loading..</span>
      ) : (
        jobs.length > 0 ? jobs.map((job, i) => <JobCard job={job} key={i} />) : (
          <span className="loader">No Jobs Found</span>
        )
      )}
    </div>
  );
}
export default JobsList;
