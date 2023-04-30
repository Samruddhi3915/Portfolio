import React from "react";

export const Skills = () => {
  return (
    <>
      <div className="container">
        <center>
          <h1
            className="mt-2"
            style={{
              fontFamily: "Lucida Console, Courier New, monospace",
              fontWeight: 700,
              color: "#36454F",
            }}
          >
            Skills
          </h1>
          <hr />
        </center>
        <center>
          <div className="row shadow p-4 m-3">
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm">
              <h3
                style={{
                  fontFamily: "Lucida Console, Courier New, monospace",
                  fontWeight: 540,
                }}
              >
                <u>Front End Development</u>
              </h3>
            </div>
            <div className="col-md-6 col-sm-12  mt-2 ml-2 p-2  shadow-sm">
              <h3
                style={{
                  fontFamily: "Lucida Console, Courier New, monospace",
                  fontWeight: 540,
                }}
              >
                <u>Back End Development</u>
              </h3>
            </div>
            <div className="col-md-6 col-sm-12  mt-2 ml-2 p-2  shadow-sm">
              <h3
                style={{
                  fontFamily: "Lucida Console, Courier New, monospace",
                  fontWeight: 540,
                }}
              >
                <u>Database</u>
              </h3>
            </div>
            <div className="col-md-6 col-sm-12  mt-2 ml-2 p-2  shadow-sm">
              <h3
                style={{
                  fontFamily: "Lucida Console, Courier New, monospace",
                  fontWeight: 540,
                }}
              >
                <u>Programming</u>
              </h3>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
