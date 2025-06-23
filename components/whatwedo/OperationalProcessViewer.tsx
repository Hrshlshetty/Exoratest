
import React, { useState } from 'react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const processStepsData: ProcessStep[] = [
  {
    id: 'step1',
    title: "Ethical Sourcing & Farmer Partnerships",
    description: "We begin by establishing direct, ethical partnerships with coffee and spice cultivators across India. Our team works closely with farming communities, ensuring fair prices and promoting sustainable agricultural practices that preserve biodiversity and enhance soil health. We prioritize quality from the ground up."
  },
  {
    id: 'step2',
    title: "Rigorous Quality Assurance",
    description: "Every batch of green coffee beans and spices undergoes a stringent quality control process. This includes meticulous inspection, grading based on international standards (size, defects, moisture content), and cupping sessions for coffee to ensure exceptional flavor profiles. Our commitment to quality is unwavering."
  },
  {
    id: 'step3',
    title: "State-of-the-Art Processing & Handling",
    description: "We collaborate with certified processing units that employ both traditional and modern techniques to prepare our products for export. Whether it's natural sun-drying for coffee cherries or careful cleaning and sorting of spices, we ensure optimal handling to maintain integrity and freshness."
  },
  {
    id: 'step4',
    title: "Customized Client Solutions",
    description: "Understanding that each client has unique needs, we offer tailored solutions. From specific green bean grades and spice varieties to flexible packaging and shipment sizes, we work diligently to meet diverse international market demands."
  },
  {
    id: 'step5',
    title: "Streamlined Global Logistics",
    description: "Our experienced logistics team manages the complexities of international shipping, ensuring timely and efficient delivery to ports worldwide. We handle all necessary documentation and customs procedures, providing a seamless export experience for our clients."
  },
  {
    id: 'step6',
    title: "Transparent Communication & Support",
    description: "Throughout the entire process, from inquiry to delivery, we maintain open and transparent communication. Our clients receive regular updates and dedicated support, fostering trust and long-term partnerships. We believe information is key to a successful collaboration."
  }
];

const OperationalProcessViewer: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>(processStepsData[0].id);

  const activeStep = processStepsData.find(step => step.id === activeStepId) || processStepsData[0];

  const handleStepClick = (id: string) => {
    setActiveStepId(id);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl mt-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Left Column: Navigation */}
        <nav className="md:w-1/3 lg:w-1/4" aria-label="Operational Process Steps">
          <ul className="space-y-2">
            {processStepsData.map((step, index) => (
              <li key={step.id}>
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
                    ${activeStepId === step.id 
                      ? 'bg-green-600 text-white shadow-md' 
                      : 'bg-slate-100 hover:bg-slate-200 text-stone-700'
                    }`}
                  aria-current={activeStepId === step.id ? 'step' : undefined}
                >
                  <span className={`font-semibold ${activeStepId === step.id ? 'text-white': 'text-green-700'}`}>STEP {index + 1}:</span>
                  <span className="ml-2">{step.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Column: Content Display */}
        <article className="md:w-2/3 lg:w-3/4 min-h-[200px] md:min-h-[300px] bg-slate-50 p-6 rounded-md border border-slate-200">
          <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-3">{activeStep.title}</h3>
          <p className="text-stone-700 leading-relaxed whitespace-pre-line">
            {activeStep.description}
          </p>
        </article>
      </div>
    </div>
  );
};

export default OperationalProcessViewer;