import React from 'react'

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume: React.FC = () => {


  return (
    <div style={{
      width: "100%"
    }}>
      <Document
          // file="https://github.com/Arunscape/resume/raw/master/Arun_Woosaree_Resume.pdf"
          // file="https://nbviewer.jupyter.org/github/Arunscape/resume/blob/master/Arun_Woosaree_Resume.pdf"
          file="https://cors-anywhere.herokuapp.com/https://github.com/Arunscape/resume/raw/master/Arun_Woosaree_Resume.pdf"
          // onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
    </div>
  );
}

export default Resume;