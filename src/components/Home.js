import React from "react";
import photo from "../images/sam.jpg";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 pl-5 ">
      <div
        className="row shadow rounded-5 p-3 mb-4"
        style={{ backgroundColor: "rgb(238, 238,238) " }}
      >
        <div className="col col-lg-8 col-sm-12">
          <br />
          <br />
          <br />
          <div className="mt-5 p-2">
            {/* <h3>Hello!</h3> */}
            <TypeAnimation
              sequence={["Hello! I'm Samruddhi Ahire", 1000]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              style={{
                color: "#36454F",
                fontFamily: "Lucida Console, Courier New, monospace",
                fontWeight: 700,
                fontSize: "2.8em",
                display: "inline-block",
              }}
            />
            {/* <h2 className="p-5">Hello! This is Samruddhi Ahire.</h2> */}
            <p
              style={{
                color: "black",
                fontSize: "2em",
                justifyContent: "center",
              }}
            >
              I am an undergraduate student pursuing Bachelor's in Computer
              Engineering having a keen interest in full-stack web development,
              CS Fundamentals and Problem solving.
            </p>
            <br />
            <center>
              <button
                className="btn btn-primary m-3"
                style={{ borderRadius: "2px", width: "100px" }}
                onClick={(e) => navigate("/projects")}
              >
                Projects
              </button>
              <button
                className="btn btn-primary m-3"
                style={{ borderRadius: "2px", width: "100px" }}
                onClick={(e) => navigate("/resume")}
              >
                Resume
              </button>
            </center>
            <br />
          </div>
        </div>
        <div className="col col-lg-4 col-sm-12">
          <center>
            <img
              style={{ maxWidth: "400px", maxHeight: "400px" }}
              width="320px"
              height="320px"
              className=" mt-5 ml-3 mb-3 rounded-circle border border-3 border-dark shadow "
              src={photo}
              alt=""
            />
            <br />
            <br />
            <center>
              <span>
                <i
                  className="m-3 fa-solid fa-envelope fa-2xl"
                  onClick={(e) => {
                    window.location = `mailto:samruddhi3915@gmail.com`;
                  }}
                ></i>

                <i
                  className=" m-3 fa-brands fa-square-github fa-2xl"
                  onClick={(e) => {
                    window.location = "https://github.com/Samruddhi3915";
                  }}
                ></i>

                <i
                  className=" m-3 fa-brands fa-linkedin fa-2xl"
                  onClick={(e) => {
                    window.location =
                      "https://www.linkedin.com/in/samruddhi-ahire-895217221/";
                  }}
                ></i>
              </span>
            </center>
            <hr />
            <div className="col-sm-12">
              <br />
            </div>
          </center>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};
