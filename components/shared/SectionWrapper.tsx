
import React from 'react';

interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, subtitle, children, className = "", titleClassName = "", subtitleClassName= "" }) => {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold text-stone-800 mb-4 text-center ${titleClassName}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`text-lg text-stone-600 mb-8 md:mb-12 text-center max-w-3xl mx-auto ${subtitleClassName}`}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;