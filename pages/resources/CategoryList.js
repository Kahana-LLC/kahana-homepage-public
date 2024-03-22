import React, { useState } from 'react';

const CategoryList = ({ categories, onSort }) => {
  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const draggedIndex = event.dataTransfer.getData('text/plain');
    const targetIndex = event.target.dataset.index;

    const newCategories = [...categories];
    const [removed] = newCategories.splice(draggedIndex, 1);
    newCategories.splice(targetIndex, 0, removed);

    onSort(newCategories); // Pass the sorted categories back to parent
  };

  return (
    <ul className="category-list">
      {categories.map((category, index) => (
        <li
          key={index}
          className="category-item"
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-index={index}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
