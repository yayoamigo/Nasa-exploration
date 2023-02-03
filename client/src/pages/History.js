import React, { useMemo } from "react";
import './pages.css'

const History = (props) => {
  const tableBody = useMemo(() => {
    return props.launches
      ?.filter((launch) => !launch.upcoming)
      .map((launch) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>
              <span style={{ color: launch.success ? "greegreenyellow" : "red" }}>
                █
              </span>
            </td>
            <td>{launch.flightNumber}</td>
            <td>{new Date(launch.launchDate).toDateString()}</td>
            <td>{launch.mission}</td>
            <td>{launch.rocket}</td>
            <td>{launch.customers?.join(", ")}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <div id="history">
      <p>
        History of mission launches including SpaceX launches starting from the
        year 2006.
      </p>
      <table style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "2rem" }}></th>
            <th style={{ width: "3rem" }}>No.</th>
            <th style={{ width: "9rem" }}>Date</th>
            <th>Mission</th>
            <th style={{ width: "7rem" }}>Rocket</th>
            <th>Customers</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default History;
