import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myJobs } from "../../JS/Actions/OffreActions";
import MyJobCard from "./MyJobCard";

function MyListJobs() {
  const loading = useSelector((state) => state.OffreReducer.load);
  const myJob = useSelector((state) => state.OffreReducer.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myJobs());
  }, [dispatch]);

  return (
    <div className="bodyCard">
      {loading ? (
        <span className="loader">Loading..</span>
      ) : (
        myJob.length > 0 ? myJob.map((job, i) => <MyJobCard job={job} key={i} />) : (
          <span className="loader">No Jobs</span>
        )
      )}
    </div>
  );
}

export default MyListJobs;
