
import React from 'react';
import { DETAILED_COFFEE_PRODUCTS_DATA } from '../../constants';
import { DetailedCoffeeProduct } from '../../types';
import ProductCardItem from './ProductCardItem';

const InteractiveCoffeeDetails: React.FC = () => {
  if (!DETAILED_COFFEE_PRODUCTS_DATA || DETAILED_COFFEE_PRODUCTS_DATA.length === 0) {
    return <p className="text-center text-stone-600 py-8">No coffee product data available to display.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {DETAILED_COFFEE_PRODUCTS_DATA.map((product: DetailedCoffeeProduct) => (
        <ProductCardItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default InteractiveCoffeeDetails;
