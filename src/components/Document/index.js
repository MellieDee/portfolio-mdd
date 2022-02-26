// //eslint-disable-next-line
// import React, { useState } from 'react';
// // eslint-disable-next-line
// import { Document, Page } from 'react-pdf';

// function Resume() {

//   state = { numPages: null, pageNumber: 1 };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () =>
//     this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
//   goToNextPage = () =>
//     this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

//   render() {
//     const { pageNumber, numPages } = this.state;
//   };

//   return (
//     <div>
//       <nav>
//         <button onClick={this.goToPrevPage}>Prev</button>
//         <button onClick={this.goToNextPage}>Next</button>
//       </nav>

//       <div style={{ width: 600 }}>
//         <Document
//           file="../public/dubberleyResume.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           {/* <Page pageNumber={pageNumber} width={600} /> */}
//         </Document>
//       </div>

//       {/* <p>
//           Page {pageNumber} of {numPages}
//         </p> */}
//     </div>
//   );
// }


// export default Resume