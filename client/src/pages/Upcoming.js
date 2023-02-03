import React, { useMemo } from "react";
import './pages.css'

const Upcoming = props => {
  const { 
    entered,
    launches,
    abortLaunch,
  } = props;

  const tableBody = useMemo(() => {
    return launches?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return <tr key={String(launch.flightNumber)}>
          <td>
            <a style={{color:"red", textDecoration: "none"}} onClick={() => abortLaunch(launch.flightNumber)}>
                ✖
            </a>
          </td>
          <td>{launch.flightNumber}</td>
          <td>{new Date(launch.launchDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.target}</td>
        </tr>;
      });
  }, [launches, abortLaunch]);

  return (
    <>
      <p>Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets.</p>
      <p>Warning! Clicking on the ✖ aborts the mission.</p>
      <table style={{tableLayout: "fixed"}}>
        <thead>
          <tr>
            <th style={{width: "3rem"}}></th>
            <th style={{width: "3rem"}}>No.</th>
            <th style={{width: "10rem"}}>Date</th>
            <th style={{width: "11rem"}}>Mission</th>
            <th style={{width: "11rem"}}>Rocket</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </table>
    </>
  );
}

export default Upcoming;
