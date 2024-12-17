// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import {
//   CodeBracketSquareIcon,
//   AcademicCapIcon,
// } from '@heroicons/react/20/solid';

// const features = [
//   {
//     name: 'Education',
//     description: 'Bachelor of Engineering in Computer Engineering (GPA: 9.09) from Savitribai Phule Pune University.',
//     icon: AcademicCapIcon,
//   },
//   {
//     name: 'Internships & Professional Experience',
//     description: 'Hands-on experience with Emerging Technologies Software & Automation Solutions, contributing to projects involving C#.NET and Python.',
//     icon: CodeBracketSquareIcon,
//   },
//   {
//     name: 'Research & Development',
//     description: 'Led research in neural network-based web application firewalls, achieving 95% accuracy in web threat detection.',
//     icon: CodeBracketSquareIcon,
//   },
//   {
//     name: 'Continuous Learning & Growth',
//     description: 'Passionate about expanding my knowledge in AI, ML, and web development through self-learning and certifications.',
//     icon: AcademicCapIcon,
//   },
// ];

// export default function PortfolioSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div ref={ref} className="overflow-hidden bg-white pt-40 pb-40 sm:pt-10 sm:pb-70">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//         className="mx-auto max-w-7xl px-4 lg:px-1"
//       >
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="lg:pr-8 lg:pt-4"
//           >
//             <div className="lg:max-w-lg">
//               <h2 className="text-base font-semibold text-indigo-600">Portfolio Highlights</h2>
//               <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
//                 Transforming Ideas into Code
//               </p>
//               <p className="mt-6 text-lg text-gray-600">
//                 Explore my journey through education, internships, research, and continuous learning in the tech field.
//               </p>
//               <dl className="mt-10 max-w-xl space-y-6 text-base text-gray-600 lg:max-w-none">
//                 {features.map((feature) => (
//                   <motion.div
//                     key={feature.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={inView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.5, delay: features.indexOf(feature) * 0.2 }}
//                     className="relative pl-9"
//                   >
//                     <dt className="inline font-semibold text-gray-900">
//                       <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline">{feature.description}</dd>
//                   </motion.div>
//                 ))}
//               </dl>
//             </div>
//           </motion.div>
//           <motion.img
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 2 }}
//             alt="Portfolio screenshot"
//             src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" // Replace with an actual screenshot of your portfolio
//             width={2432}
//             height={1442}
//             className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cyberImage from './assets/cyber.jpg';
import vscodeimg from './assets/vscode.png';
import {
  CodeBracketSquareIcon,
  AcademicCapIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Education',
    description: 'Bachelor of Engineering in Computer Engineering (GPA: 9.09) from Savitribai Phule Pune University.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Internships & Professional Experience',
    description: 'Hands-on experience with Emerging Technologies Software & Automation Solutions, contributing to projects involving C#.NET and Python.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Research & Development',
    description: 'Led research in neural network-based web application firewalls, achieving 95% accuracy in web threat detection.',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Continuous Learning & Growth',
    description: 'Passionate about expanding my knowledge in AI, ML, and web development through self-learning and certifications.',
    icon: AcademicCapIcon,
  },
];

export default function about() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="overflow-hidden pt-35 pb-40 sm:pt-10 sm:pb-70">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 lg:px-1"
      >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-indigo-600">Portfolio Highlights</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Transforming Ideas into Code
              </p>
              <p className="mt-6 text-lg text-white">
                Explore my journey through education, internships, research, and continuous learning in the tech field.
              </p>
              <dl className="mt-10 max-w-xl space-y-6 text-base text-white lg:max-w-none">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: features.indexOf(feature) * 0.2 }}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 2 }}
            alt="Portfolio screenshot"
            src={vscodeimg} // Replace with an actual screenshot of your portfolio
            width={2431}
            height={1447}
            className=" sm:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </motion.div>
    </div>
  );
}