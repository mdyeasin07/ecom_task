import './Banner_Section.css';
import banner from '../assets/picture.png';
import plus from '../assets/add.png';

function Banner() {
  return (
    <div className="banner-container">
      <div className="category-list">
        <div className="category-group">
          <ul>
            <li>TVs & Home Entertainment</li>
            <li>Computers & Tablets</li>
            <li>Smartphones & Accessories</li>
            <li>Camera & Accessories</li>
            <li>Watches</li>
            <li>Womens Clothing</li>
            <li>Mens Clothing</li>
            <li>Kids Clothing</li>
            <li>Perfume</li>
            <li style={{ color: '#1177e4' }}>
              View All Categories <img className="icon" src={plus} alt="plus" />
            </li>
          </ul>
        </div>
      </div>

      <section className="banner">
        <div className="banner-content">
          <h5 className="ft">
            Up to <span>70%</span> discount
          </h5>
          <h1 className="fts">
            TRENDY <span>FASHION</span> <span>COLLECTION</span>
          </h1>
          <button className="btn-primary">Buy now</button>
        </div>

        <div className="banner-image">
          <img src={banner} alt="banner" />
        </div>
      </section>
    </div>
  );
}

export default Banner;
