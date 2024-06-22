import React from 'react';
import { useSelector } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';

const ArticlePage = () => {
  const { articles } = useSelector(state => state.articles);
  return <ArticleDetail articles={articles} />;
};

export default ArticlePage;
