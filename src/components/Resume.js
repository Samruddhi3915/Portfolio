import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import samplePDF from "./doc/resume.pdf";
export const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  //   setPageNumber(1);
  // }
  // onLoadSuccess = { onDocumentLoadSuccess };
  return (
    <div className="container">
      <Document file={samplePDF}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
