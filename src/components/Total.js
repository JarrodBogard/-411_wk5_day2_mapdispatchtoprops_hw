import React from "react";

const Total = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Total:</h1>
      {/* change 4 to props.cars.length */}
      <h1>{props.cars.length}</h1>
    </div>
  );
};

export default Total;
