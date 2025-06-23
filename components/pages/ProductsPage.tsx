import React from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import SpiceCard from '../products/SpiceCard';
import InteractiveCoffeeDetails from '../products/InteractiveCoffeeDetails'; // New import
import { SPICES_DATA } from '../../constants'; // DETAILED_COFFEE_PRODUCTS_DATA is used by InteractiveCoffeeDetails directly
import { Spice } from '../../types';
import { Helmet } from "react-helmet";
import { DETAILED_COFFEE_PRODUCTS_DATA } from '../../constants';

const ProductsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify([
            ...DETAILED_COFFEE_PRODUCTS_DATA.map(product => ({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              'name': product.productName,
              'image': product.imageUrl,
              'description': product.roastingNotes,
              'brand': {
                '@type': 'Brand',
                'name': 'Exora Traders'
              },
              'offers': {
                '@type': 'Offer',
                'priceCurrency': 'USD',
                'price': product.fobPriceUSD,
                'availability': 'https://schema.org/InStock',
                'url': 'https://www.exoratraders.com/products'
              },
              'category': 'Coffee',
              'productionDate': undefined,
              'countryOfOrigin': 'India'
            })),
            ...SPICES_DATA.map(spice => ({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              'name': spice.name,
              'image': spice.imageUrl,
              'description': spice.description,
              'brand': {
                '@type': 'Brand',
                'name': 'Exora Traders'
              },
              'offers': {
                '@type': 'Offer',
                'priceCurrency': 'USD',
                'availability': 'https://schema.org/InStock',
                'url': 'https://www.exoratraders.com/products'
              },
              'category': 'Spice',
              'countryOfOrigin': 'India'
            }))
          ])}
        </script>
      </Helmet>
      <div className="bg-slate-50">
        <SectionWrapper 
          title="Our Premium Green Coffee Beans" 
          subtitle="Explore our selection of India's finest green coffee beans. Click on any attribute for more details or 'Inquire Now' to connect with us."
          className="pb-8"
        >
          <InteractiveCoffeeDetails />
           <p className="mt-8 text-center text-stone-600">
            All our coffee is sold as green beans. For detailed specifications, bulk orders, or specific processing requests, please get in touch.
          </p>
        </SectionWrapper>
        
        <SectionWrapper 
          title="Our Aromatic Spices" 
          subtitle="Discover the Treasures from India's Fertile Lands" 
          className="bg-white py-12" // Ensure contrast or consistent background
        >
          {SPICES_DATA.length === 0 ? (
            <p className="text-center text-stone-600">No spice product data available to display.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {SPICES_DATA.map((spice: Spice) => (
                <SpiceCard key={spice.id} spice={spice} />
              ))}
            </div>
          )}
          <p className="mt-8 text-center text-stone-600">
            We offer a wide range of premium Indian spices. Please contact us for specific requirements, bulk orders, and detailed specifications.
          </p>
        </SectionWrapper>
      </div>
    </>
  );
};

export default ProductsPage;
