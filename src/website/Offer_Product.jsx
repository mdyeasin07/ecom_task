import './offer.css';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';

const Offer_Product = () => {
  return (
    <div className="container">
      <h1>Offer Products</h1>
      <div className="offer-products">
        <div className="product">
          <img src={one} alt="one" />
          <div className="details">
            <h2>5% Sale</h2>
            <p>Smartphones & Accessories</p>
            <p className="btn-primry">Sell All</p>
          </div>
        </div>
        <div className="product">
          <img src={two} alt="Offer 2" />
          <div className="details">
            <h2>15% Sale</h2>
            <p> Computers & Tablets</p>
            <p className="btn-primry">Sell All</p>
          </div>
        </div>
        <div className="product">
          <img src={three} alt="Offer 3" />
          <div className="details">
            <h2>New Arival</h2>
            <p>Camera & Accessories</p>
            <p className="btn-primry">Sell All</p>
          </div>
        </div>
        <div className="product">
          <img src={four} alt="Offer 4" />
          <div className="details">
            <h2>Save 30%</h2>
            <p>Valentaines Offer</p>
            <p className="btn-primry">Sell All</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer_Product;
