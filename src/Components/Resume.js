import { Document, Page, pdfjs } from "react-pdf";
import React  from 'react';
import resume from '../Resume.pdf';
import CancelIcon from '@material-ui/icons/Cancel'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({showResume}) => {

  const pageNumber = 1

  return (
    <div className="resume_container">

      <Document
        file={resume}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <button className="resume_button" onClick={showResume}> <CancelIcon/></button>
      
    </div>
  );
}

export default Resume