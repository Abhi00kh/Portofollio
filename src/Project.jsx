// import { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { CodeBracketSquareIcon, CpuChipIcon, ChatBubbleLeftIcon, LightBulbIcon } from '@heroicons/react/20/solid';

// const tutorials = [
//   {
//     name: 'Web Development',
//     description: 'Learn the fundamentals and advanced concepts of web development using HTML, CSS, JavaScript, React, and more.',
//     icon: CodeBracketSquareIcon,
//     buttonLabel: 'Start Learning',
//     link: '/web-development',
//   },
//   {
//     name: 'Data Science',
//     description: 'Dive into data analysis, visualization, and machine learning using Python, Pandas, Matplotlib, and more.',
//     icon: CpuChipIcon,
//     buttonLabel: 'Explore Data Science',
//     link: '/data-science',
//   },
//   {
//     name: 'Machine Learning',
//     description: 'Master machine learning algorithms, model building, and AI techniques using libraries like TensorFlow and Scikit-learn.',
//     icon: LightBulbIcon,
//     buttonLabel: 'Learn ML',
//     link: '/machine-learning',
//   },
//   {
//     name: 'Programming Basics',
//     description: 'Start your coding journey with tutorials on basic programming languages like Python, Java, and C++. Perfect for beginners.',
//     icon: ChatBubbleLeftIcon,
//     buttonLabel: 'Get Started',
//     link: '/programming-basics',
//   },
// ];

// export default function Tutorials() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 } // Trigger when 20% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20 text-gray-700 shadow-md rounded-lg"
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={isVisible ? { opacity: 1, scale: 1 } : {}}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         className="mx-auto max-w-7xl px-6 lg:px-8"
//       >
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <motion.h2
//             initial={{ y: 20, opacity: 0 }}
//             animate={isVisible ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1.2, ease: 'easeOut' }}
//             className="text-4xl font-semibold text-gray-900"
//           >
//             Explore Our Tutorials
//           </motion.h2>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={isVisible ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 1.4, ease: 'easeOut' }}
//             className="mt-4 text-lg text-gray-600"
//           >
//             Whether you're just starting out or looking to expand your knowledge, we have tutorials to help you master your skills.
//           </motion.p>
//         </div>
//         <motion.div
//           initial="hidden"
//           animate={isVisible ? 'visible' : 'hidden'}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.3,
//               },
//             },
//           }}
//           className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-16"
//         >
//           {tutorials.map((tutorial) => (
//             <motion.div
//               key={tutorial.name}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//               className="relative flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl"
//             >
//               <tutorial.icon className="h-12 w-12 text-indigo-600" aria-hidden="true" />
//               <h3 className="mt-6 text-xl font-semibold text-gray-900">{tutorial.name}</h3>
//               <p className="mt-2 text-base text-gray-600">{tutorial.description}</p>
//               <a
//                 href={tutorial.link}
//                 className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700"
//               >
//                 {tutorial.buttonLabel}
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CodeBracketSquareIcon, CpuChipIcon, LightBulbIcon, FolderIcon } from '@heroicons/react/20/solid';

const projects = [
  {
    name: 'Web App Firewall',
    description: 'A deep learning firewall detecting web app attacks with 95% accuracy.',
    icon: CodeBracketSquareIcon,
    buttonLabel: 'View Project',
    link: 'https://github.com/Abhi00kh/Firewall-final',
  },
  {
    name: 'Python Tutorial Site',
    description: 'A responsive Python tutorial site built with Vue.js for interactive learning.',
    icon: FolderIcon,
    buttonLabel: 'Visit Site',
    link: 'https://abhi00kh.github.io/my-python-tutorial',
  },
  {
    name: 'File Categorizer',
    description: 'Python package automating file categorization with 400+ downloads.',
    icon: CpuChipIcon,
    buttonLabel: 'View on GitHub',
    link: 'https://github.com/Abhi00kh/file-categorizer',
  },
  {
    name: 'Checkers AI Game',
    description: 'AI-powered checkers game with advanced strategic gameplay.',
    icon: LightBulbIcon,
    buttonLabel: 'View on GitHub',
    link: 'https://github.com/Abhi00kh/Checkers-Game-AI',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const visibleProjects = showMore || window.innerWidth >= 640 ? projects : projects.slice(0, 2);

  return (
    <div
      ref={sectionRef}
      className="py-20 text-white shadow-md rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-white"
          >
            Here are some of the projects I've worked on. Check them out for a deeper look into my work.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative flex flex-col items-center text-center p-4 sm:p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-xl"
            >
              <project.icon className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 text-blue-500" aria-hidden="true" />
              <h3 className="mt-4 text-lg sm:text-xl lg:text-2xl font-semibold text-white">{project.name}</h3>
              <p className="mt-2 text-sm sm:text-base lg:text-lg text-white">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block px-3 py-2 text-xs sm:text-sm lg:text-base font-medium text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonLabel}
              </a>
            </motion.div>
          ))}
        </motion.div>
        {!showMore && window.innerWidth < 640 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(true)}
              className="inline-block px-5 py-3 text-sm font-medium text-gray-800 bg-white rounded-md shadow-sm hover:bg-gray-200"
            >
              Show More
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}