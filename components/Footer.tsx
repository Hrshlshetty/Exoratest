import React from 'react';
import { CONTACT_EMAIL, LOGO_URL } from '../constants'; // Import LOGO_URL

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img 
          src={LOGO_URL} 
          alt="Exora Traders logo" 
          className="footer-logo mx-auto" // mx-auto for centering
        />
        <p className="text-base">&copy; {new Date().getFullYear()} Exora Traders. All rights reserved.</p> {/* Increased font size */}
        <p className="mt-2">Connecting India's agricultural heritage with the world.</p>
        <p className="mt-1">
          Contact us: <a href={`mailto:${CONTACT_EMAIL}`} className="text-green-400 hover:text-green-300">{CONTACT_EMAIL}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;