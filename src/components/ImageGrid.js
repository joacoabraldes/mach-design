import React, { useState } from 'react';
import './ImageGrid.css';

function ImageGrid({ categories }) {
    console.log(categories);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const selectedCategory = categories[selectedCategoryIndex];

  function handleCategoryChange(event) {
    setSelectedCategoryIndex(parseInt(event.target.value, 10));
  }

  function handleImageClick(imageUrl) {
    setSelectedImageUrl(imageUrl);
    document.body.style.overflow = 'hidden';
  }

  function handleCloseButtonClick() {
    setSelectedImageUrl(null);
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="image-grid">
      <div className="category-selector">
        <label htmlFor="category-select">Select a category:</label>
        <select
          id="category-select"
          value={selectedCategoryIndex}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={index}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="images">
        {selectedCategory.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={"Image " + (index + 1)}
            className="image"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImageUrl && (
        <div className="fullscreen-image">
          <img
            src={selectedImageUrl}
            alt="Full-screen image"
            className="fullscreen-image__img"
          />
          <button
            className="fullscreen-image__close-button"
            onClick={handleCloseButtonClick}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageGrid;