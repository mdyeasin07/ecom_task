import './Header.css';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
      <div className="header">
        {/* Left side logo */}
        <a href="/">
          <div className="left-side">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </a>

        {/* Middle search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <div className="category-dropdown">
            <select className="category-select">
              <option value="all">All Categories</option>
              <option value="category1">Electronics</option>
              <option value="category2">Clothing & Apparel</option>
              <option value="category3">Home & Kitchen</option>
            </select>
          </div>
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Right side icons */}
        <div className="right-side">
          <div className="wishlist-icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="amount">
            <a>Account</a>
          </div>
          <div className="account-icon">
            <i className="fas fa-user"></i>
            <a className="amount">$0.00</a>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header-container">
        <div className="browse-category">
          <i className="fa fa-list icon" aria-hidden="true"></i> Browse Category
        </div>
        <div className="header-links">
          <span>Home</span>
          <span>
            Products
            <i className="fas fa-arrow-down picon"></i>
          </span>
          <span>
            Categories <i className="fas fa-arrow-down picon"></i>
          </span>
          <span>
            Pages <i className="fas fa-arrow-down picon"></i>
          </span>
          <span>Campaign</span>
          <span>Offer</span>
          <span>Blog</span>
          <span>Review</span>
          <span>Flash sale</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
