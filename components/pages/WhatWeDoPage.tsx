import React from 'react';
import { Helmet } from "react-helmet";
import SectionWrapper from '../shared/SectionWrapper';
import CoffeeJourneyTimeline from '../products/CoffeeJourneyTimeline';
import OperationalProcessViewer from '../whatwedo/OperationalProcessViewer'; // Import the new component

const WhatWeDoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>What We Do | Exora Traders</title>
        <meta name="description" content="Explore Exora Traders' operational excellence in delivering India's finest coffee and spices to the world. Learn about our process and values." />
        <link rel="canonical" href="https://www.exoratraders.com/what-we-do" />
        <meta property="og:title" content="What We Do | Exora Traders" />
        <meta property="og:description" content="Explore Exora Traders' operational excellence in delivering India's finest coffee and spices to the world. Learn about our process and values." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/what-we-do" />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
      </Helmet>
      <SectionWrapper 
        title="What We Do" 
        subtitle="Our Operational Excellence in Delivering India's Finest." // Updated subtitle
        className="pb-8 md:pb-10" // Adjusted padding
      >
        <OperationalProcessViewer /> 
      </SectionWrapper>

      {/* 
        The CoffeeJourneyTimeline is now presented after the OperationalProcessViewer.
        It has its own SectionWrapper for stylistic consistency.
      */}
      <SectionWrapper 
        className="bg-slate-100 pt-8 md:pt-12" // Can use bg-white or bg-slate-100
        // title for CoffeeJourneyTimeline is handled within the component itself
        titleClassName="sr-only" 
        subtitleClassName="sr-only"
      >
        <CoffeeJourneyTimeline />
      </SectionWrapper>
    </>
  );
};

export default WhatWeDoPage;