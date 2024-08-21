import React from "react";

function TenthStudent(props) {
  console.log("Hi");
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

export default TenthStudent;
