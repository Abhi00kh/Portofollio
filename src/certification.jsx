import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import datacertification from './assets/datacertification.png';
import DockerCertification from './assets/DockerCertification.png';
import MachineLearningCertification from './assets/MachineLearningCertification.png';
import BusinessIntelligenceCertification from './assets/BusinessIntelligenceCertification.png';

const certifications = [
  {
    name: 'Docker Foundations Professional Certificate',
    id: 'cert-docker',
    image: DockerCertification,
    description: 'Demonstrates knowledge in Docker, containerization, and orchestration.',
    features: ['Docker', 'Containerization', 'Orchestration'],
  },
  {
    name: 'Machine Learning with Python',
    id: 'cert-ml',
    image: MachineLearningCertification,
    description: 'Covers essential machine learning algorithms using Python.',
    features: ['Python', 'Machine Learning', 'Supervised Learning'],
  },
  {
    name: 'Business Intelligence Essentials',
    id: 'cert-bi',
    image: BusinessIntelligenceCertification,
    description: 'Foundational skills in data analysis and business intelligence.',
    features: ['Data Analysis', 'Power BI', 'Data Visualization'],
  },
  {
    name: 'Data Engineering Foundations',
    id: 'cert-data',
    image: datacertification,
    description: 'Focuses on foundational skills for data engineering and ETL pipelines.',
    features: ['Data Engineering', 'ETL', 'Data Warehousing'],
  },
  {
    name: 'Complete Guide to Power BI',
    id: 'cert-powerbi',
    image: datacertification,
    description: 'Comprehensive training in Power BI for data visualization.',
    features: ['Power BI', 'Data Analysis', 'Business Intelligence'],
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCerts, setVisibleCerts] = useState([]);

  useEffect(() => {
    const updateVisibleCerts = () => {
      const certs = window.innerWidth < 640 
        ? certifications.slice(currentIndex, currentIndex + 1)
        : certifications.slice(currentIndex, currentIndex + 3);
      if (certs.length < (window.innerWidth < 640 ? 1 : 3)) {
        certs.push(...certifications.slice(0, (window.innerWidth < 640 ? 1 : 3) - certs.length));
      }
      setVisibleCerts(certs);
    };

    updateVisibleCerts();
    window.addEventListener('resize', updateVisibleCerts);
    return () => window.removeEventListener('resize', updateVisibleCerts);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-base font-semibold text-indigo-600">Certifications</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Recognized Certifications
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-5xl text-center text-lg font-medium text-white sm:text-xl">
        These certifications reflect my knowledge and expertise in various technical domains.
      </p>

      <div className="relative mt-16 max-w-6xl mx-auto">
        {/* Slider content */}
        <div className="flex overflow-hidden">
          {visibleCerts.map((cert) => (
            <div
              key={cert.id}
              className="flex-shrink-0 w-full sm:w-1/3 px-4"
            >
              <div className="rounded-lg p-8 ring-2 ring-gray-900/10 sm:p-10 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg bg-black">
                <img src={cert.image} alt={cert.name} className="w-full h-auto mb-4" />
                <h3 id={cert.id} className="text-base font-semibold text-blue-500">
                  {cert.name}
                </h3>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-blue-500">
                  Verified
                </p>
                <p className="mt-6 text-base text-blue-300">
                  {cert.description}
                </p>
                <ul className="mt-8 space-y-2 text-sm">
                  {cert.features.map((feature) => (
                    <li key={feature} className="flex gap-x-2">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-blue-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 sm:p-3"
          onClick={handlePrev}
        >
          ←
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 sm:p-3"
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
}