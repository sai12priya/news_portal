import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/articlesSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, articles } = useSelector(state => state.articles);

  const handlePrevPage = () => {
    dispatch(setPage(page > 1 ? page - 1 : 1));
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handleFirstPage = () => {
    dispatch(setPage(1));
  };

  
  return (
    <div className="pagination">
      <button onClick={handleFirstPage} disabled={page === 1}>
        &laquo; First
      </button>
      <button onClick={handlePrevPage} disabled={page === 1}>
        &lsaquo;&lsaquo; 
      </button>
      <span>{page}</span>
      <button onClick={handleNextPage} disabled={articles.length === 0}>
        &rsaquo;&rsaquo;
      </button>
      
    </div>
  );
};

export default Pagination;
