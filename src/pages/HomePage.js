import React from 'react';
import ArticlesList from '../components/ArticlesList';

import Pagination from '../components/Pagination';

const HomePage = () => (
  <div className="homepage">
    <ArticlesList />
    <Pagination />
  </div>
);

export default HomePage;
