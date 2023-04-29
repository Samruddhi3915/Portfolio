import React from "react";
import photo from "../images/sam.jpg";
import { TypeAnimation } from "react-type-animation";
export const Home = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col col-lg-8 col-sm-12">
          <div>
            <h3>Hello!</h3>
            <TypeAnimation
              sequence={["I'm Samruddhi Ahire", 1000]}
              wrapper="span"
              cursor={false}
              repeat={Infinity}
              style={{
                color: "red",
                fontSize: "2.5em",
                display: "inline-block",
              }}
            />
            {/* <h2 className="p-5">Hello! This is Samruddhi Ahire.</h2> */}
            <p style={{ color: "black", fontSize: "2em" }}>
              I am a full-stack web developer with a keen interest in Problem
              solving.
            </p>
            <center>
              <span>
                <i className="m-3 fa-solid fa-envelope fa-2xl"></i>
                <i className=" m-3 fa-brands fa-square-github fa-2xl"></i>
                <i className=" m-3 fa-brands fa-linkedin fa-2xl"></i>
              </span>
            </center>
          </div>
        </div>
        <div className="col col-lg-4 col-sm-12">
          <center>
            <img
              style={{ maxWidth: "400px", maxHeight: "400px" }}
              width="360px"
              height="360px"
              className=" mt-4 ml-3 mb-3 rounded-circle border border-3 border-dark shadow "
              src={photo}
              alt=""
            />
            <div className="col-sm-12">
              <br />
              <br />
              <br />
              <br />
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};
