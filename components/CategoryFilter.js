import React, { useState } from "react";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategoryState(category);
    setSelectedCategory(category);
  };

  const categories = ["AI", "Sports", "Money", "Finance", "Gaming", "Technology", "Product", "Media", "Fashion", "Software", "Fitness", "Luxury", "Ecommerce"];

  const categoryOptions = [];
  for (let i = 0; i < categories.length; i++) {
    categoryOptions.push(
      <option key={i} value={categories[i]}>
        {categories[i]}
      </option>
    );
  }

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
            {categoryOptions}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;