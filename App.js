import React from "react";

export default function App({ tableName, viewName }) {
  return (
    <div>
      <h1>{viewName}</h1>
      <p>Table name: {tableName}</p>
    </div>
  );
}