import { useState, useEffect } from 'react';
import './FetchDataComponent.css';
import shipping from '../assets/free-shipping.png';
import exchange from '../assets/exchange.png';
import offer from '../assets/offer.png';
import support from '../assets/support.png';

function FetchDataComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();

        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="fcontainer">
      <div className="fsidebar">
        <div className="sidebar-item">
          <img className="img" src={shipping} alt="shipping" />
          <div>
            <h2 className="ft">Shipping Info</h2>
            <p className="ftc">
              The minimum order value for shared free shipping is 499.
            </p>
          </div>
        </div>
        <div className="sidebar-item">
          <img className="img" src={support} alt="support" />

          <div>
            <h2 className="ft">24/7 Support</h2>
            <p className="ftc">Contact us 24 hours.</p>
          </div>
        </div>
        <div className="sidebar-item">
          <img className="img" src={offer} alt="offer" />
          <div>
            <h2 className="ft">Best Price & Offers</h2>
            <p className="ftc">Order ৳5000 or more.</p>
          </div>
        </div>
        <div className="sidebar-item">
          <img className="img" src={exchange} alt="exchange" />
          <div>
            <h2 className="ft">Easy to Returns</h2>
            <p className="ftc">Offer a refund for 15 to 30 days.</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Featured Items</h1>
        <div className="fmain-content">
          <div className="all-products">
            {products.map((product) => (
              <div className="prod" key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discountPercentage}%</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock}</p>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
                <img
                  className="prod-image"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FetchDataComponent;
