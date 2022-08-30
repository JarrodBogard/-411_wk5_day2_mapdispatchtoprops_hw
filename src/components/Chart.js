import React from "react";
import PieChart from "react-minimal-pie-chart";

const Chart = (props) => {
  // create variable "over" with all the cars whose horsepower is >= 200
  const over = props.cars.filter((car) => car.horsepower >= 200);
  // create variable "under" with all the cars whose horsepower is < 200
  const under = props.cars.filter((car) => car.horsepower < 200);
  console.log(props.cars, over, under);
  return (
    <div>
      <PieChart
        style={{ width: "200px" }}
        data={[
          { title: "Over", value: over.length, color: "#C13C37" },
          { title: "Under", value: under.length, color: "#E38627" },
        ]}
        label
        labelStyle={{
          fill: "white",
          fontSize: "small",
        }}
      />
      <Legend />
    </div>
  );
};

function Legend() {
  return (
    <h6>
      Horsepower: &nbsp;
      <span style={{ background: "#C13C37" }}>&nbsp; &nbsp; &nbsp;</span>
      &nbsp;
      <span>Over 200</span>
      &nbsp;
      <span style={{ background: "#E38627" }}>&nbsp; &nbsp; &nbsp;</span>
      &nbsp;
      <span>Under 200</span>
    </h6>
  );
}

export default Chart;
