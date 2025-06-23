import React from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { Helmet } from "react-helmet";

const AboutUsPage: React.FC = () => {
  const values = [
    { title: "Authenticity:", description: "We champion genuine Indian agricultural products, celebrating their origin and quality." },
    { title: "Sustainability:", description: "We are committed to environmentally sound and socially responsible sourcing practices that support farmer livelihoods." },
    { title: "Transparency:", description: "We believe in open communication and clear processes throughout our supply chain." },
    { title: "Quality:", description: "We meticulously select and deliver only the finest products that meet rigorous international standards." },
    { title: "Partnership:", description: "We foster collaborative relationships with farmers, roasters, and buyers to create shared value." }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Exora Traders</title>
        <meta name="description" content="Learn about Exora Traders, our values, mission, and commitment to quality, sustainability, and partnership in the global coffee and spice trade." />
        <link rel="canonical" href="https://www.exoratraders.com/about" />
        <meta property="og:title" content="About Us | Exora Traders" />
        <meta property="og:description" content="Learn about Exora Traders, our values, mission, and commitment to quality, sustainability, and partnership in the global coffee and spice trade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/about" />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
      </Helmet>
      <SectionWrapper title="Who We Are" subtitle="Building Trust Through Transparency and Expertise">
        <div className="space-y-12">
          {/* Our Mission Section - Image Removed, Text Centered */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">Our Mission</h3>
            <p className="text-lg text-stone-700 leading-relaxed mb-4 text-center">
              At Exora Traders, our mission is to be the premier global conduit for India's exceptional agricultural products, particularly its world-renowned coffee and aromatic spices. We are driven by a passion to showcase the unique heritage and sustainable cultivation practices of Indian farming communities to an international audience.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed text-center">
              We aim to build lasting relationships based on trust, transparency, and mutual respect with both our valued suppliers in India and our discerning customers worldwide.
            </p>
          </div>

          {/* Our Values Section - Updated Formatting */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">Our Values</h3>
            <dl className="space-y-6 text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
              {values.map(value => (
                <div key={value.title}>
                  <dt className="font-semibold text-green-700">{value.title}</dt>
                  <dd className="mt-1 ml-0">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Our Story Section - Already Centered */}
          <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">Our Story</h3>
              <p className="text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto text-center">
                Rooted in a profound love for India's rich agricultural heritage, Exora Traders was founded by a team of passionate individuals to bridge the gap between India's exceptional farmers and the global market. We saw the immense potential of the country's unique, shade-grown coffee and aromatic spices, yet a stark lack of international recognition.With over 15 years of collective experience in supply chain management and a deep understanding of coffee quality, our mission is to showcase the finest Indian produce to a global audience. We meticulously manage everything from sourcing and quality control to logistics, ensuring that the legacy, commitment, and unparalleled quality of Indian agriculture are appreciated in every cup and on every plate. Our ultimate vision is to foster sustainable growth and a lasting global appreciation for the treasures cultivated by India's dedicated farming communities.
              </p>
          </div>

        </div>
      </SectionWrapper>
    </>
  );
};

export default AboutUsPage;
