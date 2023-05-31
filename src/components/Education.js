import React from "react";
import fc from "../images/francis (2).jpg";
import kp from "../images/kkwp.jpeg";
import pt from "../images/pict.jpg";
export const Education = () => {
  return (
    <>
      <div classNameName="container">
        <center>
          <h1
            className="mt-2"
            style={{
              fontFamily: "Lucida Console, Courier New, monospace",
              fontWeight: 700,
              color: "#36454F",
            }}
          >
            Education
          </h1>
          <hr />
        </center>
        <center>
          <div className="row shadow p-5 m-3  border-2">
            <div className="col-md-4 col-sm-12 mt-2 ml-2 p-2 shadow-sm ">
              <div
                className="card rounded shadow p-2"
                style={{ width: "24rem" }}
              >
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  Schooling
                </h5>
                <center>
                  <img
                    src={fc}
                    className="img-fluid shadow"
                    alt="..."
                    border="2px"
                    width="280px"
                    height="200px"
                  />
                </center>
                <br />
                <h4
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "20px",
                  }}
                >
                  St. Francis High School,Nashik
                </h4>
                <div className="card-body">
                  <p className="card-text">SSC Percentage: 97.02%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-2 ml-2 p-2 shadow-sm ">
              <div
                className="card rounded shadow p-2"
                style={{ width: "24rem" }}
              >
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  Schooling
                </h5>
                <center>
                  <img
                    src={kp}
                    className="img-fluid"
                    alt="..."
                    border="2px"
                    width="280px"
                    height="200px"
                  />
                </center>
                <br />
                <h4
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "19px",
                  }}
                >
                  K.K.Wagh Polytechnic,Nashik
                </h4>
                <div className="card-body">
                  <p className="card-text">Diploma Percentage: 97.71%</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mt-2 ml-2 p-2 shadow-sm ">
              <div
                className="card rounded shadow p-2"
                style={{ width: "24rem" }}
              >
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  Engineering
                </h5>
                <center>
                  <img
                    src={pt}
                    className="img-fluid"
                    alt="..."
                    border="2px"
                    width="280px"
                    height="200px"
                  />
                </center>
                <br />
                <h4
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "20px",
                  }}
                >
                  PICT,Pune
                </h4>
                <div className="card-body">
                  <p className="card-text">CGPA: 9.43</p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
