// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// const ArticleDetail = ({ articles }) => {
//   const { articleUrl } = useParams();
//   const article = articles.find(a => a.url === articleUrl);

//   if (!article) return <div>Article not found</div>;

//   return (
//     <div className="article-detail">
//       <h1>{article.title}</h1>
//       <img src={article.urlToImage} alt={article.title} />
//       <p>{article.content}</p>
//       <Link to={article.url} target="_blank" rel="noopener noreferrer">Read more</Link>
//     </div>
//   );
// };

// export default ArticleDetail;
// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ArticleDetail = ({ articles }) => {
//   const { articleUrl } = useParams();
//   const decodedUrl = decodeURIComponent(articleUrl);
//   const article = articles.find(a => a.url === decodedUrl);

//   if (!article) return <div>Article not found</div>;

//   return (
//     <div className="article-detail">
//       <h1>{article.title}</h1>
//       <img src={article.urlToImage} alt={article.title} />
//       <div className="content">
//         {article.content ? <p>{article.content}</p> : <p>{article.description}</p>}
//       </div>
//       <a href={article.url} target="_blank" rel="noopener noreferrer">Read more on the original site</a>
//     </div>
//   );
// };

// export default ArticleDetail;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetail = ({ articles }) => {
  const { articleUrl } = useParams();
  const decodedUrl = decodeURIComponent(articleUrl);
  const article = articles.find(a => a.url === decodedUrl);

  const [fullContent, setFullContent] = useState('');

  useEffect(() => {
    const fetchFullContent = async () => {
      try {
        const response = await axios.get(decodedUrl);
        // Assuming the full content can be extracted from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, 'text/html');
        const content = doc.querySelector('article')?.innerText || doc.body.innerText;
        setFullContent(content);
      } catch (error) {
        console.error('Error fetching full content:', error);
        setFullContent('Unable to fetch full content. Please visit the original site.');
      }
    };

    if (!article.content || article.content.includes('[+')) {
      fetchFullContent();
    } else {
      setFullContent(article.content);
    }
  }, [decodedUrl, article]);

  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <div className="content">
        <p>{fullContent}</p>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more on the original site</a>
    </div>
  );
};

export default ArticleDetail;
