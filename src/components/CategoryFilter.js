import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/articlesSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <select onChange={handleCategoryChange}>
      {categories.map(category => (
        <option key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
