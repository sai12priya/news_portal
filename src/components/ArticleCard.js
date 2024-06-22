import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//  // Ensure you import your CSS file

// const ArticleCard = ({ article }) => {
//   const { id, urlToImage, title, description, url } = article;
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     // Check local storage on component mount to initialize favorite status
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setIsFavorite(favorites.includes(id));
//   }, [id]);

//   const handleToggleFavorite = () => {
//     let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//     if (isFavorite) {
//       favorites = favorites.filter(favId => favId !== id);
//     } else {
//       favorites.push(id);
//     }

//     localStorage.setItem('favorites', JSON.stringify(favorites));
//     setIsFavorite(!isFavorite);
//   };

//   // Only render the card if it has an image
//   if (!urlToImage) return null;

//   return (
//     <div className="article-card">
//       <div className="image-container">
//         <img src={urlToImage} alt={title} />
//       </div>
//       <div className="content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to={`/article/${url}`} className="read-more">
//           Read more
//         </Link>
//       </div>
//       <button onClick={handleToggleFavorite} className={`favorite-button ${isFavorite ? 'favorite' : ''}`}>
//         {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//       </button>
//     </div>
//   );
// };

// export default ArticleCard;
const ArticleCard = ({ article }) => {
  const { id, urlToImage, title, description, url } = article;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.includes(id));
  }, [id]);

  const handleToggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter(favId => favId !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  if (!urlToImage) return null;

  return (
    <div className="article-card">
      <div className="image-container">
        <img src={urlToImage} alt={title} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/article/${encodeURIComponent(url)}`} className="read-more">
          Read more
        </Link>
      </div>
      <button onClick={handleToggleFavorite} className={`favorite-button ${isFavorite ? 'favorite' : ''}`}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ArticleCard;