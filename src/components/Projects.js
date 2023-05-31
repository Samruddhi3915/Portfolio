import React from "react";
import inn from "../images/Inotebook.png";
import ic from "../images/Icode.png";
import tc from "../images/Tindog.png";
import tsh from "../images/tshirt.png";
import tu from "../images/textutils.png";
import nm from "../images/newsmonkey.png";
export const Projects = () => {
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
            Projects
          </h1>
          <hr />
        </center>
        <center>
          <div className="row shadow p-4 m-3 border border-dark border-2">
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm ">
              <div className="card shadow" style={{ width: "28rem" }}>
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  ICode
                </h5>
                <img src={ic} className="card-img-top p-2 shadow" alt="..." />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "left" }}>
                    Icode is a unified coding platform built using MERN Stack
                    where users can showcase their coding profiles on
                    leetcode,codechef and codeforces.
                  </p>
                  <a
                    href="https://icode-c3mw.onrender.com/"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm">
              <div className="card shadow" style={{ width: "28rem" }}>
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  T-Store
                </h5>
                <img
                  src={tsh}
                  className="card-img-top p-2 shadow"
                  alt="..."
                  width="130px"
                  height="360px"
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "left" }}>
                    T-Store is an online T-shirt built using MERN Stack which is
                    a selling website wherein we have T-shirts according to
                    seasons. It is built using MERN Stack and has a payment
                    gateway implemented (Braintree Paypal).
                  </p>
                  <a
                    href="https://github.com/Samruddhi3915/T-Store"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm">
              <div className="card shadow" style={{ width: "28rem" }}>
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  NewsMonkey
                </h5>
                <img
                  src={nm}
                  className="card-img-top p-2 shadow"
                  width="130px"
                  height="230px"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "left" }}>
                    NewsMonkey is a React App that helps you stay upto date
                    about current happenings in the world in various categories
                    including:
                    Business,Entertainment,General,Health,Science,Sports,
                    Technology
                  </p>
                  <a
                    href="https://github.com/Samruddhi3915/NewsMonkey"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm">
              <div className="card shadow" style={{ width: "28rem" }}>
                <h5
                  className="card-title p-2 m-2"
                  style={{
                    fontFamily: "Lucida Console, Courier New, monospace",
                    fontWeight: 900,
                    fontSize: "30px",
                  }}
                >
                  TextUtils
                </h5>
                <img
                  src={tu}
                  className="card-img-top p-2 shadow"
                  alt="..."
                  width="130px"
                  height="230px"
                />
                <div className="card-body">
                  <p className="card-text" style={{ textAlign: "left" }}>
                    <br />
                    TextUtils is a React App that allows a user to manipulate
                    the text according to their choice.It is built using
                    ReactJS. One can convert text to Lower case and Upper
                    case,copy text,clear text,remove extra spaces and users can
                    see the preview of their text.
                  </p>
                  <a
                    href="https://github.com/Samruddhi3915/TextUtils"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm">
              <div className="card shadow" style={{ width: "28rem" }}>
                <div className="card-body">
                  <h5
                    className="card-title p-2 m-2"
                    style={{
                      fontFamily: "Lucida Console, Courier New, monospace",
                      fontWeight: 900,
                      fontSize: "30px",
                    }}
                  >
                    Tindog
                  </h5>
                  <img
                    src={tc}
                    className="card-img-top p-2 shadow "
                    alt="..."
                    width="130px"
                    height="230px"
                  />
                  <p className="card-text" style={{ textAlign: "left" }}>
                    <br />
                    Tindog is a simple web application built with HTML, CSS, and
                    Bootstrap that allows users to browse and connect with other
                    dog owners in their area.
                  </p>
                  <a
                    href="https://github.com/Samruddhi3915/Tindog"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-2 ml-2 p-2 shadow-sm">
              <div className="card shadow" style={{ width: "28rem" }}>
                <div className="card-body">
                  <h5
                    className="card-title p-2 m-2"
                    style={{
                      fontFamily: "Lucida Console, Courier New, monospace",
                      fontWeight: 900,
                      fontSize: "30px",
                    }}
                  >
                    INotebook
                  </h5>
                  <img
                    src={inn}
                    className="card-img-top p-2 shadow"
                    alt="..."
                    width="130px"
                    height="220px"
                  />
                  <p className="card-text" style={{ textAlign: "left" }}>
                    <br />
                    INotebook is a application through which one can keep their
                    notes on cloud. It is built using MERN Stack.The user can
                    perform the basic CRUD operations on his/her notes using the
                    App.
                  </p>
                  <a
                    href="https://github.com/Samruddhi3915/inotebook"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </center>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
