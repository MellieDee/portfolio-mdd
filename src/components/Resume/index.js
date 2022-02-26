// import React from "react";
// import Pdf from '../../assets/dubberleyResume.PDF';

// const Resume = () => {
//   const openPDF = () => {
//     const pdfWindow = window.open("test");
//     const title     = "My PDF";
//     const URI       = "dubberleyResume";
//     const html      = `
//       <html>
//         <head>
//           <title>${title}</title>
//         </head>
//         <body style="margin:0">
//           <embed width="100%" height="100%" src=${Resume} type="application/pdf">
//         </body>
//       </html>
//     `;

//     pdfWindow.document.write(html);
//     pdfWindow.document.close();
//     pdfWindow.history.pushState(null, null, URI);
//   };

//   return (
//     <div className="MainLandingContainer">
//       <div className="ResumeContainer">
//         <button variant="primary" target="_blank" onClick={openPDF}>
//           Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Resume;