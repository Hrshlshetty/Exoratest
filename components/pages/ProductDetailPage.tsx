import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DETAILED_COFFEE_PRODUCTS_DATA, SPICES_DATA } from '../../constants';
import { DetailedCoffeeProduct, Spice } from '../../types';
import { Helmet } from 'react-helmet';

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function isCoffeeProduct(product: DetailedCoffeeProduct | Spice): product is DetailedCoffeeProduct {
  return (product as DetailedCoffeeProduct).productName !== undefined;
}
function isSpiceProduct(product: DetailedCoffeeProduct | Spice): product is Spice {
  return (product as Spice).name !== undefined;
}

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find coffee product
  const coffee = DETAILED_COFFEE_PRODUCTS_DATA.find(
    (p) => slugify(p.productName) === slug
  );
  // Find spice product
  const spice = SPICES_DATA.find(
    (s) => slugify(s.name) === slug
  );

  const product = coffee || spice;
  const isCoffee = !!coffee;
  const isSpice = !!spice;

  if (!product) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="text-green-700 underline">Back to Products</Link>
      </main>
    );
  }

  const title = isCoffeeProduct(product) ? product.productName : product.name;
  const description = isCoffeeProduct(product) ? product.roastingNotes : product.description;

  return (
    <main className="max-w-3xl mx-auto p-4 md:p-8">
      <Helmet>
        <title>{title} | Exora Traders</title>
        <meta name="description" content={description || ''} />
        <link rel="canonical" href={`https://www.exoratraders.com/products/${slug}`} />
      </Helmet>
      <nav className="mb-4 text-sm">
        <Link to="/products" className="text-green-700 underline">&larr; Back to Products</Link>
      </nav>
      <article className="bg-white rounded-lg shadow-lg p-6">
        <header className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
            {title}
          </h1>
          {isCoffeeProduct(product) && (
            <p className="text-stone-600">{product.origin}</p>
          )}
          {isSpiceProduct(product) && (
            <p className="text-stone-600">{product.origin}</p>
          )}
        </header>
        <img
          src={product.imageUrl}
          alt={`${title} - Exora Traders`}
          className="w-full max-w-md mx-auto rounded-lg shadow mb-6"
          loading="lazy"
        />
        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-stone-700">
            {description}
          </p>
        </section>
        {isCoffeeProduct(product) && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Coffee Details</h2>
            <ul className="list-disc list-inside space-y-1 text-stone-700">
              <li><strong>Type:</strong> {product.typeOfBeans}</li>
              <li><strong>Bean Sizing:</strong> {product.beanSizing}</li>
              <li><strong>Grade:</strong> {product.grade}</li>
              <li><strong>Defects per 600g:</strong> {product.defectPer600g}</li>
              <li><strong>Outturn per 50kg:</strong> {product.outTurnPer50kg}</li>
              <li><strong>Weight:</strong> {product.weightKg}</li>
              <li><strong>Process:</strong> {product.process}</li>
              <li><strong>FOB Price (USD):</strong> ${product.fobPriceUSD}</li>
              <li><strong>CIF Price (USD):</strong> ${product.cifPriceUSD}</li>
            </ul>
          </section>
        )}
        {isSpiceProduct(product) && (
          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Spice Details</h2>
            <ul className="list-disc list-inside space-y-1 text-stone-700">
              <li><strong>Botanical Name:</strong> {product.botanicalName}</li>
              <li><strong>Forms Available:</strong> {product.formsAvailable.join(', ')}</li>
              <li><strong>Grades Available:</strong> {product.gradesAvailable.join(', ')}</li>
              {product.aromaProfile && <li><strong>Aroma Profile:</strong> {product.aromaProfile}</li>}
              {product.culinaryUses && <li><strong>Culinary Uses:</strong> {product.culinaryUses}</li>}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
};

export default ProductDetailPage; 