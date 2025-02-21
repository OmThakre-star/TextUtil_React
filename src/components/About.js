import React from "react";

export default function About(props) {

  // let myStyle = {
  //  color: props.Mode === "dark" ? "white" : "#03102e",
  //  backgroundColor: props.Mode === "dark" ? "#03102e" : "white"
  // }

  return (
    <div
      className="container"
      style={{ color: props.Mode === "dark" ? "white" : "#03102e" }}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ color: props.Mode === "dark" ? "black" : "#03102e" }}>
              MyTextUtil is a text analyzer which is use to write your text , modifiy it and you can also calculate words and characters in your text.
              It also calculate time to read your paragraph
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.Mode === "dark" ? "black" : "#03102e" }}>
              Very nice web-site , easy and and free to use 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             Browser Compatibility
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.Mode === "dark" ? "black" : "#03102e" }}>
              You can open it on any browser , very compatible to any browser
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
