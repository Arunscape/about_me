import React from 'react'

import {Document, Page} from 'react-pdf'


export default () => {


    return (
        <>
        <Document
          file={{
              url: 'https://github.com/Arunscape/resume/raw/master/Arun_Woosaree_Resume.pdf'
          }}
        //   onLoadSuccess={this.onDocumentLoadSuccess}
        >
            <Page pageNumber={1} />
            <Page pageNumber={2} />
        </Document>
        </>
      );
}