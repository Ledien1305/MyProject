import React from 'react';
import Product from './Product';

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  // Thêm các sản phẩm khác nếu cần
];

const ProductList = () => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
