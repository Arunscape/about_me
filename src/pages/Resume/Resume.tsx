import React,{ useRef } from 'react'
import { usePdf } from 'react-pdf-js';

// const PDF_URL = 'https://github.com/Arunscape/resume/raw/master/Arun_Woosaree_Resume.pdf'
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const PDF_URL = 'https://raw.githubusercontent.com/Arunscape/resume/master/Arun_Woosaree_Resume.pdf'

const Resume: React.FC = () => {


  const canvasEl = useRef(null);

  const [loading, numPages] = usePdf({
    file: PDF_URL,
    canvasEl,
    scale: 3
  });

  // const scale = window.inner / viewport.width;


  return (
    <>
      {loading && <span>Loading...</span>}
      <canvas 
        width={window.innerWidth}
        height={window.innerHeight}
        ref={canvasEl} 
      />
    </>
  );


}

export default Resume;