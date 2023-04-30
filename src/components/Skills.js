import React from "react";
import cs from "../images/css-3.png";
import ht from "../images/html-5.png";
import re from "../images/physics.png";
import bo from "../images/bootstrap.png";
import js from "../images/js.png";
import no from "../images/nodejs.png";
import ex from "../images/express.svg";
import mo from "../images/mongodb.png";
import sq from "../images/sql.png";
import c from "../images/c.png";
import cc from "../images/c++.png";
import ja from "../images/java.png";
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
              <img
                src={cs}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2 "
                style={{ "border-radius": "28px" }}
              />
              <img
                src={ht}
                alt="css"
                width="80px"
                height="80px"
                className=" p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={re}
                alt="css"
                width="80px"
                height="80px"
                className=" p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={bo}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
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
              <img
                src={js}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={no}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={ex}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
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
              <img
                src={mo}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={sq}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
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
              <img
                src={c}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={cc}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
              <img
                src={ja}
                alt="css"
                width="80px"
                height="80px"
                className="p-2 border border-dark border-3 m-2"
                style={{ "border-radius": "28px" }}
              />
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
