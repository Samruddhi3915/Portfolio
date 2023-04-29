import React from "react";
import img6 from "../images/resume.png";
import pdfFile from "./doc/resume.pdf";
export const Resume = () => {
  return (
    <div className="conatiner ">
      <center>
        <img
          className="p-2 m-4 border border-dark shadow"
          src={img6}
          alt="hey"
        />
      </center>
      <center>
        <button className="btn btn-success">
          <a
            href={pdfFile}
            download
            className="text-white text-decoration-none"
          >
            Download
          </a>
        </button>
      </center>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

// import React, { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

// const Resume = () => {
//   const [NumPages, setnumPages] = useState(null);
//   const [PageNumber, setPageNumber] = useState(1);
//   function onDocumentSuccess({ NumPages }) {
//     setnumPages(NumPages);
//   }
//   return (
//     <div className="d-flex align-items-center justify-content-center">
//       <Document file="./doc/resume.pdf" onLoadSuccess={onDocumentSuccess}>
//         <Page pageNumber={1} width={1000} />
//       </Document>
//     </div>
//   );
// };

// export default Resume;
