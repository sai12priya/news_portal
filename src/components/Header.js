// import React from 'react';
// import CategoryFilter from './CategoryFilter';

// const Header = () => {
//   return (
//     <header className="app-header">
//       <div className="header-content">
//         <h1>My News App</h1>
        
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//         </div>
//         <CategoryFilter />
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryFilter from './CategoryFilter';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>My News App</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <CategoryFilter />
        <Link to="/favorites" className="favorites-icon">
          ❤️ Favorites
        </Link>
      </div>
    </header>
  );
};

export default Header;
