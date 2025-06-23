import React from "react";
import { Link } from "react-router-dom";
import SectionWrapper from "../shared/SectionWrapper";
import { NAVIGATION_LINKS, HERO_YOUTUBE_VIDEO_ID } from "../../constants";
import type { NavItem } from "../../types";
import { Helmet } from "react-helmet";

const HomePage: React.FC = () => {
  const coreMessage = "At Exora Traders, we proudly connect India's rich agricultural heritage with global markets, offering an exquisite selection of the finest coffee green beans and aromatic spices.";
  
  const mainSections: NavItem[] = NAVIGATION_LINKS.filter(link => 
    ["Who We Are", "What We Do", "Products", "Sustainability", "Contact Us"].includes(link.label)
  );
  
  const youtubeEmbedSrc = `https://www.youtube.com/embed/${HERO_YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1&iv_load_policy=3&rel=0`;

  return (
    <>
      <Helmet>
        <title>Exora Traders | Premium Indian Coffee & Spices Exporter</title>
        <meta name="description" content="Exora Traders connects India's finest green coffee beans and aromatic spices with global markets. Discover our commitment to quality, sustainability, and heritage." />
        <meta property="og:title" content="Exora Traders | Premium Indian Coffee & Spices Exporter" />
        <meta property="og:description" content="Connecting Indian farmers to the world with premium coffee and spices. Explore our sustainable and transparent trade practices." />
        <meta property="og:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.exoratraders.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Exora Traders | Premium Indian Coffee & Spices Exporter" />
        <meta name="twitter:description" content="Discover Exora Traders' commitment to quality, sustainability, and India's agricultural heritage." />
        <meta name="twitter:image" content="https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png" />
        <link rel="canonical" href="https://www.exoratraders.com/" />
      </Helmet>
      <div className="pb-0"> {/* Removed padding for ticker */}
        {/* Hero Section with YouTube Iframe Background */}
        <div className="relative h-screen min-h-[500px] flex items-center justify-center text-center overflow-hidden">
          
          <div className="hero-youtube-iframe-container" aria-hidden="true">
            <iframe
              src={youtubeEmbedSrc}
              title="Exora Traders Hero Background Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              // allowFullScreen attribute removed as it's not needed for background and CSS handles sizing
              // width and height attributes are removed as CSS handles sizing
            ></iframe>
          </div>

          <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Overlay */}
          
          <div className="relative z-20 p-4"> {/* Content */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
              Exora Traders
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
              {coreMessage}
            </p>
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explore Our Products
            </Link>
          </div>
        </div>

        {/* Navigation Buttons Section */}
        <SectionWrapper title="Discover More" className="bg-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {mainSections.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">{item.label}</h3>
                <p className="text-sm text-stone-600">Learn more about {item.label.toLowerCase()}.</p>
              </Link>
            ))}
          </div>
        </SectionWrapper>
        
        {/* Our Commitment Section */}
        <SectionWrapper title="Our Commitment" className="bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-stone-700 leading-relaxed">
                Exora Traders is dedicated to fostering transparent and sustainable trade. We bridge the gap between dedicated Indian farmers and the global market, ensuring fair practices and premium quality in every batch of coffee and spices we deliver. Our roots are in the rich soil of India, and our vision is global.
              </p>
              <img 
                src="https://storage.googleapis.com/exoratraders-images/Product%20images/Partners%20combined(updated).png" 
                alt="Logos of Exora Traders' valued partners" 
                className="partner-logos-image mt-8 rounded-lg shadow-md mx-auto"
              />
            </div>
        </SectionWrapper>

        {/* <PriceTicker /> */} {/* PriceTicker component removed */}
      </div>
    </>
  );
};

export default HomePage;
