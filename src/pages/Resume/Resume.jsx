import React, { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf';


import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// @ts-ignore
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// const PDF_URL = 'https://github.com/Arunscape/resume/raw/master/Arun_Woosaree_Resume.pdf'
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const PDF_URL = 'https://raw.githubusercontent.com/Arunscape/resume/master/Arun_Woosaree_Resume.pdf'

const Resume = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const updateWidth = () => setWidth(window.innerWidth)
    window.addEventListener("resize", updateWidth)

    return () => {
      window.removeEventListener("resize", updateWidth)
    }

  }, [width])

  return (
    <Document
      file={PDF_URL}
    >
      <Page
        pageNumber={1}
        width={width}
      />
    </Document>
  );


}

export default Resume;