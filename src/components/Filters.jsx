import React from "react";
import "./Filters.css";

export default function Filter({ handleFilterChange }) {
  return (
    <div className="filters">
      <input
        id="search"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
}
