import React, { useState } from "react";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [selectedCategory, setSelectedCategoryState] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategoryState(category);
    setSelectedCategory(category);
  };

  const categories = [ "AI","Sports","Money","Finance", "Gaming","Technology", "Product","Media","Fashion", "Software", "Fitness",  "Luxury", "Ecommerce",
  ];

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
            {categories
              ? categories.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))
              : null}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;