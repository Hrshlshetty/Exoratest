
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DetailedCoffeeProduct } from '../../types';

interface ProductCardItemProps {
  product: DetailedCoffeeProduct;
}

const ProductCardItem: React.FC<ProductCardItemProps> = ({ product }) => {
  const [openAttributeKey, setOpenAttributeKey] = useState<string | null>(null);

  const attributesToShow = [
    { key: 'origin', label: 'Origin' },
    { key: 'typeOfBeans', label: 'Type of Beans' },
    { key: 'beanSizing', label: 'Bean Sizing' },
    // { key: 'grade', label: 'Grade' }, // Removed Grade from display
    { key: 'defectPer600g', label: 'Defects Per 600g' },
    { key: 'outTurnPer50kg', label: 'OutTurn Per 50kg' },
    { key: 'weightKg', label: 'Weight/Packaging' },
    { key: 'process', label: 'Process' },
    { key: 'roastingNotes', label: 'Roasting Notes' },
  ];

  const handleToggle = (key: string) => {
    setOpenAttributeKey(prevKey => (prevKey === key ? null : key));
  };
  
  return (
    <div className="interactive-product-card flex flex-col h-full">
      <img
        className="w-full h-56 object-cover"
        src={product.imageUrl}
        alt={`Image of ${product.productName}`}
        loading="lazy"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-green-700 mb-3">{product.productName}</h3>
        
        {/* Price display section removed */}

        <div className="border-t border-stone-200 flex-grow pt-4"> {/* Added pt-4 for spacing after removing price */}
          {attributesToShow.map(attr => {
            const attributeKey = attr.key as keyof DetailedCoffeeProduct;
            const value = product[attributeKey] as string;
            
            if (!value) return null;

            const isExpanded = openAttributeKey === attr.key;

            return (
              <div key={attr.key} className="product-attribute-item">
                <button
                  type="button"
                  className="product-attribute-toggle"
                  onClick={() => handleToggle(attr.key)}
                  aria-expanded={isExpanded}
                  aria-controls={`content-${product.id}-${attr.key}`}
                >
                  <span>{attr.label}</span>
                  <svg className="arrow-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div
                  id={`content-${product.id}-${attr.key}`}
                  role="region"
                  aria-labelledby={`toggle-${product.id}-${attr.key}`}
                  className={`product-attribute-content ${isExpanded ? 'open' : ''}`}
                >
                  <p>{value}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <Link
          to="/contact"
          state={{ productName: product.productName, productType: "Coffee" }}
          className="mt-6 block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-md text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          aria-label={`Inquire about ${product.productName}`}
        >
          Inquire Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCardItem;
