import React from "react";
import { useState, useEffect } from "react";

const JobPage = () => {
  const [job, setJob] = useState(null);

  useEffect (() => {
    const fetchJob = async () => {
      try{
        const res = await fetch ('/api/job');
        const data = await res.json();
        setJob(data);
      } catch (error){
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
  })
  return (
    <>

    </>
  )
};

export default JobPage;