import React, { useState } from "react";
import { connectToggleRefinement } from "react-instantsearch-dom";

const CustomCost = ({ refine }) => {
  const [isPaid, setIsPaid] = useState(false); // Initial state for paid filter

  const handleToggle = () => {
    setIsPaid(!isPaid);
    refine(!isPaid ? "true" : "false");
  };

  // Render method for the custom cost filter
  const render = () => (
    <div className="filter-options">
      <div className="filter-option">
        <label>Cost</label>
        <div className="toggle-button">
          <button
            className={`toggle-button__option ${!isPaid ? "active" : ""}`}
            onClick={() => handleToggle()}
          >
            Free
          </button>
          <button
            className={`toggle-button__option ${isPaid ? "active" : ""}`}
            onClick={() => handleToggle()}
          >
            Paid
          </button>
        </div>
      </div>
    </div>
  );

  return render(); // Call the render method here
};

const ConnectedCustomCost = connectToggleRefinement(CustomCost);

export default ConnectedCustomCost;
