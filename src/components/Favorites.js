import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from './ArticleCard';

const Favorites = () => {
  const articles = useSelector(state => state.articles.articles);
  const favoriteIds = useSelector(state => state.articles.favorites);

  const favoriteArticles = articles.filter(article => favoriteIds.includes(article.id));

  if (favoriteArticles.length === 0) {
    return <div>No favorite articles</div>;
  }

  return (
    <div className="favorites-list">
      {favoriteArticles.map(article => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default Favorites;
