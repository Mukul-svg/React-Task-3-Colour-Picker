import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const arr = [
  "red",
  "#29f505",
  "blue",
  "#ecfc05",
  "#ed07ed",
  "aqua",
  "#faa716",
  "purple",
  "pink",
  "#28a745",
  "#e65f05",
  "#16c7c1",
  "#4a1b07",
  "#f57842",
  "#3a4fb5",
  "#ebe602",
];

export class Container extends Component {
  constructor() {
    super();
    this.state = {
      color: "#28a745",
    };
    this.toggle = false;
  }

  handleColor = () => {
    this.setState({
      toggle: true,
    });
  };

  checkColor = (e) => {
    this.setState({
      color: e.target.style.backgroundColor,
      toggle: false,
    });
  };

  render() {
    return (
      <div
        className="container-lg mt-1 px-5"
        style={{ height: "750px", backgroundColor: "#bfa3cc" }}
      >
        <h2 className="pt-5 d-flex justify-content-center fw-bolder">
          Color Picker
        </h2>
        <div
          className="container-lg mt-3 border"
          style={{
            backgroundColor: "#e3bdb6",
            height: "550px",
            borderRadius: "15px",
            boxShadow: "1px 1px 10px black",
          }}
        >
          <div className="d-flex justify-content-center align-items-center my-5">
            {this.state.toggle ? (
              arr.map((item) => {
                return (
                  <button
                    onClick={this.checkColor}
                    className="mx-2 border-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: item,
                      boxShadow: "1px 1px 10px #3b383a",
                      borderRadius: "5px",
                    }}
                  ></button>
                );
              })
            ) : (
              <p></p>
            )}
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              id="clickButton"
              className="text-light border-0 px-3 py-2"
              onClick={this.handleColor}
              style={{
                padding: "10px",
                backgroundColor: this.state.color,
                borderRadius: "5px",
                boxShadow: "1px 1px 1px #3b383a",
              }}
            >
              Pick a color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
