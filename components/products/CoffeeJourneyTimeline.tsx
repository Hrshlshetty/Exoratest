
import React, { useState } from 'react';

interface JourneySection {
  type: 'paragraph' | 'list' | 'subheading';
  text?: string;
  items?: string[];
}

interface JourneyStage {
  id: string;
  title: string;
  sections: JourneySection[];
}

const journeyStagesData: JourneyStage[] = [
  {
    id: 'cultivation',
    title: "Cultivation & Farming",
    sections: [
      { type: 'paragraph', text: "Indian coffee is uniquely shade-grown, often under a two-tiered canopy of diverse tree species. This practice not only protects the coffee plants from direct sunlight but also contributes to biodiversity and soil health. It's commonly intercropped with spices like cardamom, pepper, and vanilla, enhancing the farm's ecosystem and providing additional income for farmers. The primary coffee-growing regions are the hill tracts of Karnataka, Kerala, and Tamil Nadu in Southern India." },
      { type: 'subheading', text: "Varieties:" },
      { type: 'paragraph', text: "Arabica, known for its aromatic and milder flavor, is typically grown at higher altitudes (1000-1500 meters). Robusta, with its bolder flavor and higher caffeine content, thrives in warmer, more humid tropical regions at lower elevations." }
    ]
  },
  {
    id: 'harvesting',
    title: "Harvesting",
    sections: [
      { type: 'paragraph', text: "Coffee harvesting in India is a labor-intensive process, primarily done by hand. Skilled workers selectively pick only the ripe, red-purple coffee cherries. This ensures that only the best quality beans are harvested, contributing to the superior flavor of Indian coffee. Multiple pickings are often necessary as cherries on the same plant ripen at different rates." }
    ]
  },
  {
    id: 'processing',
    title: "Processing Methods",
    sections: [
      { type: 'paragraph', text: "After harvesting, coffee cherries are processed to remove the outer layers and extract the green coffee beans. India employs two main methods:" },
      { type: 'list', items: [
          "<strong>Dry Processing (Natural):</strong> Cherries are spread out to dry in the sun on large patios or raised beds. This traditional method, common for \"cherry coffee,\" allows the fruit's characteristics to impart unique flavors to the bean. It is water-efficient but requires careful monitoring.",
          "<strong>Wet Processing (Washed):</strong> This method involves removing the pulp from the cherries before drying. The beans undergo fermentation (to break down the mucilage layer) and washing. \"Parchment coffee\" produced this way is often favored for its clarity and acidity, though it is more water-intensive."
        ]
      },
      { type: 'subheading', text: "Monsooning Process:" },
      { type: 'paragraph', text: "India is famous for its unique \"monsooned coffee.\" This specialty process involves exposing green coffee beans to the moist monsoon winds in well-ventilated warehouses for several weeks. This causes the beans to swell, lose acidity, and develop a distinctive mellow, musty flavor profile." }
    ]
  },
  {
    id: 'collection_sorting',
    title: "Collection & Sorting",
    sections: [
      { type: 'paragraph', text: "The majority (around 98%) of Indian coffee growers are smallholder farmers. They typically sell their harvested cherries or parchment coffee to local traders or directly to curing centers. At these centers, the coffee is further sorted and graded based on size, weight, density, and quality to ensure consistency." }
    ]
  },
  {
    id: 'quality_control',
    title: "Quality Control & Storage",
    sections: [
      { type: 'paragraph', text: "Rigorous quality control measures are implemented at various stages to meet demanding international standards. This includes visual inspection for defects, moisture content analysis, and cupping (sensory evaluation). Properly dried green coffee beans are then stored in clean, dry warehouses, often in jute or sisal bags, to maintain their quality before export." }
    ]
  },
  {
    id: 'export_preparation',
    title: "Export Preparation",
    sections: [
      { type: 'paragraph', text: "Most Indian coffee is exported as green beans. However, there's a growing capacity for processing coffee into roasted beans, ground coffee, and soluble (instant) coffee for both domestic and international markets. Beans are packed according to buyer specifications, typically in 60kg jute bags or bulk liner bags within containers." }
    ]
  },
  {
    id: 'shipment_logistics',
    title: "Shipment & Logistics",
    sections: [
      { type: 'paragraph', text: "Streamlined logistics ensure efficient export of coffee. India exports 70-80% of its coffee production. Major destinations include Italy, Germany, Belgium, and Russia. Coffee is shipped via sea freight, often through major Indian ports, with common shipping routes utilizing the Suez Canal to reach European markets." }
    ]
  }
];

const CoffeeJourneyTimeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>(journeyStagesData[0].id);

  const activeStage = journeyStagesData.find(stage => stage.id === activeStageId) || journeyStagesData[0];

  const handleStageClick = (id: string) => {
    setActiveStageId(id);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4 text-center">
          From Farm to Port: The Journey of Our Coffee
        </h3>
        <nav className="border-b border-stone-200 mb-6">
          <ul className="flex flex-wrap justify-center -mb-px" aria-label="Coffee Journey Stages">
            {journeyStagesData.map((stage) => (
              <li key={stage.id} className="mr-2">
                <button
                  onClick={() => handleStageClick(stage.id)}
                  className={`inline-block p-3 md:p-4 border-b-2 rounded-t-lg text-sm md:text-base font-medium transition-colors duration-150
                    ${activeStageId === stage.id 
                      ? 'border-green-600 text-green-600' 
                      : 'border-transparent hover:text-stone-600 hover:border-stone-300 text-stone-500'}`}
                  aria-current={activeStageId === stage.id ? 'step' : undefined}
                >
                  {stage.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <article className="min-h-[200px]">
        <h4 className="text-xl md:text-2xl font-semibold text-stone-800 mb-4">{activeStage.title}</h4>
        <div className="space-y-4 text-stone-700 leading-relaxed">
          {activeStage.sections.map((section, index) => {
            if (section.type === 'paragraph') {
              return <p key={index}>{section.text}</p>;
            }
            if (section.type === 'subheading') {
              return <h5 key={index} className="text-lg font-semibold text-stone-700 mt-3 mb-1">{section.text}</h5>;
            }
            if (section.type === 'list' && section.items) {
              return (
                <ul key={index} className="list-disc list-inside space-y-2 pl-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
};

export default CoffeeJourneyTimeline;