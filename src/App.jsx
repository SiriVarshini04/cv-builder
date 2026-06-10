import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "My_CV",
    pageStyle: `
      @media print {
        button {
          display: none !important;
        }
        .cv-container {
          padding: 60px;
          box-shadow: none;
          margin: 0;
        }
      }
    `,
  });

  return (
    <div className="cv-container">
      <div ref={cvRef}>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
      <button className="download-btn" onClick={handlePrint}>Download PDF</button>
    </div>
  );
}

export default App;