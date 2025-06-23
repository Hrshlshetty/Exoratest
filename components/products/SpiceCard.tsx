
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Spice } from '../../types';

interface SpiceCardProps {
  spice: Spice;
}

const SpiceCard: React.FC<SpiceCardProps> = ({ spice }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-48 object-cover"
        src={spice.imageUrl}
        alt={spice.name}
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-green-700 mb-1">{spice.name}</h3>
        <p className="text-sm italic text-stone-500 mb-3">{spice.botanicalName}</p>
        <p className="text-stone-700 leading-relaxed text-sm mb-4 flex-grow">{spice.description}</p>
        
        <div className="space-y-2 text-xs">
          <div>
            <strong className="text-stone-600">Origin:</strong>
            <span className="text-stone-500 ml-1">{spice.origin}</span>
          </div>
          <div>
            <strong className="text-stone-600">Forms Available:</strong>
            <span className="text-stone-500 ml-1">{spice.formsAvailable.join(', ')}</span>
          </div>
          <div>
            <strong className="text-stone-600">Grades:</strong>
            <span className="text-stone-500 ml-1">{spice.gradesAvailable.join(', ')}</span>
          </div>
          {spice.aromaProfile && (
            <div>
              <strong className="text-stone-600">Aroma:</strong>
              <span className="text-stone-500 ml-1">{spice.aromaProfile}</span>
            </div>
          )}
          {spice.culinaryUses && (
            <div>
              <strong className="text-stone-600">Uses:</strong>
              <span className="text-stone-500 ml-1">{spice.culinaryUses}</span>
            </div>
          )}
        </div>
         <Link
            to="/contact"
            state={{ productName: spice.name, productType: "Spice" }} // Pass product name and type
            className="mt-4 block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md text-sm transition duration-150 ease-in-out"
            aria-label={`Inquire about ${spice.name}`}
          >
            Inquire Now
          </Link>
      </div>
    </div>
  );
};

export default SpiceCard;