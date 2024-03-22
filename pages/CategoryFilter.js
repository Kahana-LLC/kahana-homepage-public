// CategoryFilter.js
import React, { useState, useEffect } from "react";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategoryState(category);
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="filter-options">
        <div className="filter-option">
          {/* <label>Categories</label>  */} 
          <select
            id="cats"
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ color: 'gray' }}
          >
            <option value="">All Categories</option>
            {["AI", "Sports", "Money", "Finance", "Gaming", "Technology", "Product", "Media", "Fashion", "Software", 
              "Fitness","Luxury","Ecommerce"].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
