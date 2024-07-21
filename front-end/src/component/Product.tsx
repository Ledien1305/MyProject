import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const addToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
