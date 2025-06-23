import React from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { Helmet } from "react-helmet";

// Updated PillarCardProps: icon and imageUrl are removed
interface SustainabilityPillarProps {
  title: string;
  description: string;
}

// Updated PillarCard: Displays only text, no image or icon.
const PillarCard: React.FC<SustainabilityPillarProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6"> {/* Removed transform classes, simplified card */}
      <h3 className="text-xl font-semibold text-green-700 mb-3">{title}</h3> {/* Title color changed for consistency */}
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
};

const SustainabilityPage: React.FC = () => {
  // Updated pillars data: icon and imageUrl properties are removed
  const pillarsData: SustainabilityPillarProps[] = [
    {
      title: "Eco-Friendly Farming",
      description: "We champion shade-grown coffee and intercropping systems that preserve biodiversity, enhance soil fertility, and reduce the need for chemical inputs. Our partner farms are havens for local flora and fauna."
    },
    {
      title: "Water Conservation",
      description: "We encourage and support water-efficient processing methods, such as meticulous dry processing and investments in water recycling systems for wet processing, minimizing our environmental footprint in water-scarce regions."
    },
    {
      title: "Fair Farmer Livelihoods",
      description: "We are committed to fair trade principles, ensuring that farmers receive equitable prices for their produce. We also support initiatives that provide training, resources, and access to better healthcare and education for farming communities."
    },
    {
      title: "Waste Reduction & Circularity",
      description: "We work with our partners to minimize waste throughout the supply chain. This includes promoting the use of coffee cherry pulp for organic compost and exploring innovative uses for other agricultural byproducts."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sustainability | Exora Traders</title>
        <meta name="description" content="Discover Exora Traders' commitment to sustainability, ethical sourcing, and environmental stewardship in the global coffee and spice trade." />
        <link rel="canonical" href="https://www.exoratraders.com/sustainability" />
        <meta property="og:title" content="Sustainability | Exora Traders" />
        <meta property="og:description" content="Discover Exora Traders' commitment to sustainability, ethical sourcing, and environmental stewardship in the global coffee and spice trade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/sustainability" />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
      </Helmet>
      <SectionWrapper title="Our Commitment to Sustainability" subtitle="Nurturing Nature, Empowering Communities, Ensuring Quality">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-stone-700 leading-relaxed">
            At Exora Traders, sustainability is not an afterthought; it's woven into the fabric of our operations. We believe that responsible business practices are essential for the long-term health of our planet, the prosperity of farming communities, and the enduring quality of the products we deliver.
          </p>
        </div>

        {/* New Prominent Video Section */}
        <div className="mb-12 md:mb-16">
          <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VoQZRPYxm4Y?si=LDrKdOl3LGGatY6o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
              ></iframe>
          </div>
        </div>

        {/* Sustainability Pillars Section - Now using text-only PillarCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillarsData.map(pillar => (
            <PillarCard key={pillar.title} title={pillar.title} description={pillar.description} />
          ))}
        </div>

        {/* Join Us Section - Image removed */}
        <div className="mt-16 text-center bg-green-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Join Us in Our Sustainable Journey</h3>
          <p className="text-stone-700 leading-relaxed max-w-2xl mx-auto">
            By choosing Exora Traders, you are not just purchasing premium coffee and spices; you are supporting a system that values environmental stewardship and social equity. Together, we can make a difference, one cup, one spice, one sustainable choice at a time.
          </p>
          {/* The image previously here has been removed */}
        </div>
      </SectionWrapper>
    </>
  );
};


// Placeholder SVG Icons - No longer used by PillarCard in this updated version, but kept in file.
// If not needed elsewhere, these can be removed.
const LeafIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const WaterDropIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.303 0-9.75 3.444-9.75 7.688 0 3.364 2.628 6.632 6.666 9.948a.75.75 0 001.168 0C14.122 16.57 16.75 13.31 16.75 9.938c0-4.244-4.447-7.688-9.75-7.688zm0 0V12m0-9.75S9.75 6.375 9.75 9.938" />
 </svg>
);
const UserGroupIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.284-.24-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.284.24-1.857m0 0a5.002 5.002 0 019.52 0M12 14a4 4 0 110-8 4 4 0 010 8z" />
  </svg>
);
const RecycleIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a6.75 6.75 0 00-9.856 0M14.25 19.5l-4.5-4.5 4.5-4.5M4.572 8.572a6.75 6.75 0 009.856 0M9.75 4.5l4.5 4.5-4.5 4.5M3 12a9 9 0 1115.93-6.494" />
  </svg>
);


export default SustainabilityPage;
