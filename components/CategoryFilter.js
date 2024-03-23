import React, { useState } from "react";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState("");
  
  // Ensure categories is properly initialized as an array
  const categories = ["AI", "Sports", "Money", "Finance", "Gaming", "Technology", "Product", "Media", "Fashion", "Software", "Fitness", "Luxury", "Ecommerce"];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategoryState(category);
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="filter-options">
        <div className="filter-option">
          <select
            id="cats"
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ color: "gray" }}
          >
            <option value="">All Categories</option>
            {/* Ensure categories is an array before calling map */}
            {Array.isArray(categories) && categories.map((option, i) => (
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