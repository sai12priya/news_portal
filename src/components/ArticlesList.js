import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from './ArticleCard';
import { getArticles } from '../store/articlesSlice';

const ArticlesList = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector(state => state.articles);

  useEffect(() => {
    dispatch(getArticles({ category, page }));
  }, [category, page, dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  // Filter articles to exclude those without images
  const filteredArticles = articles.filter(article => article.urlToImage);

  return (
    <div className="articles-list">
      {filteredArticles.map(article => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
