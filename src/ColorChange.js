import React, { Component } from "react";

const colors = [
  "blue",
  "red",
  "orange",
  "gold",
  "purple",
  "silver",
  "black",
  "grey",
  "yellow",
  "green",
  "tomato",
  "brown",
  "blueviolet",
  "chocolate",
  "white",
];
const Box = ({ color }) => {
  const handleClick = (e) => {
    e.target.style.background =
      colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div
      onClick={handleClick}
      className="color"
      style={{ background: color }}
    ></div>
  );
};

export class ColorChange extends Component {
  render() {
    return (
      <div className="box-container">
        <Box color={"blue"} />
        <Box color={"red"} />
        <Box color={"orange"} />
        <Box color={"gold"} />
        <Box color={"purple"} />
        <Box color={"black"} />
        <Box color={"grey"} />
        <Box color={"brown"} />
        <Box color={"yellow"} />
        <Box color={"green"} />
        <Box color={"deepskyblue"} />
        <Box color={"blueviolet"} />
        <Box color={"aquamarine"} />
        <Box color={"chocolate"} />
        <Box color={"teal"} />
        <Box color={"tomato"} />
        <Box color={"salmon"} />
        <Box color={"saddlebrown"} />
        <Box color={"pink"} />
        <Box color={"peachplum"} />
        <Box color={"darkblue"} />
        <Box color={"darkmagenta"} />
        <Box color={"crimson"} />
        <Box color={"goldenrod"} />
      </div>
    );
  }
}

export default ColorChange;
