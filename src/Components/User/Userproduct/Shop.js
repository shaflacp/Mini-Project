import React from 'react';
import './shop.css';

const necklacesData = [
  {
    id: 1,
    name: 'RUBY BALL CACTUS',
    imageUrl: '/1.jpg',
    price: '$150.00 USD'
  },
  {
    id: 1,
    name: 'GOLDENBALL CACTUS',
    imageUrl: '/2.jpg',
    price: '$100.00 USD'

  },
  {
    id: 1,
    name: 'CROWN OF THORNS',
    imageUrl: '/3.jpg',
    price: '$120.00 USD'

  },
  {
    id: 1,
    name: 'ARROW HEAD',
    imageUrl: '/4.jpg',
    price: '$60.00 USD'

  },
  {
    id: 1,
    name: 'GONIALOE VARIEGATA',
    imageUrl: '/5.jpg',
    price: '$220.00 USD'

  },
  {
    id: 1,
    name: 'DESERT ROSE',
    imageUrl: '/6.jpg',
    price: '$185.00 USD'

  },
  {
    id: 1,
    name: 'JUNIPER BONSAI',
    imageUrl: '/7.jpg',
    price: '$126.00 USD'

  },
  {
    id: 1,
    name: 'MINI BARREL CACTUS',
    imageUrl: '/8.jpg',
    price: '$90.00 USD'

  },
  {
    id: 1,
    name: 'AEONIUM CANARIENSIS',
    imageUrl: '/9.jpg',
    price: '$100.00 USD'

  }
 
];

function Shop() {
  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${necklacesData} to cart`);
  };

  return (
    <div className='body'>
      <h2 className='necklaces-heading'>GREEN GARDENING</h2>
      <div className="item-container">
        {necklacesData.map(necklace => (
          <div key={necklace.id} className="item">
            <img src={necklace.imageUrl} alt={necklace.name} />
            <h3>{necklace.name}</h3>
            <p>{necklace.description}</p>
            <p>{necklace.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
