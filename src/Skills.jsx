// import { motion } from "framer-motion";
// import { IoLogoPython } from "react-icons/io";
// import { IoLogoReact } from "react-icons/io5";
// import { DiDocker } from "react-icons/di";
// import { BsGraphUp } from "react-icons/bs";
// import { SiTensorflow } from "react-icons/si";
// import { FaJava, FaJs, FaGithub, FaDatabase } from "react-icons/fa";

// export default function SkillsSection() {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={containerVariants}
//       className="py-16 sm:py-24 lg:py-32"
//       style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b )" }}
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Section: Title and Description */}
//         <motion.div
//           variants={itemVariants}
//           className="text-center lg:text-left lg:w-1/2"
//         >
//           <h2 className="text-base font-semibold text-indigo-600">Technical Skills</h2>
//           <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
//             The tools I use to create impactful solutions
//           </p>
//         </motion.div>

//         {/* Right Section: Icons */}
//         <motion.div
//           variants={containerVariants}
//           className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:mt-16 lg:mt-0 lg:w-1/2"
//         >
//           {/* Skill 1 */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <IoLogoPython className="h-20 w-20 text-yellow-500 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">Python</p>
//           </motion.div>

//           {/* Skill 2 */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <IoLogoReact className="h-20 w-20 text-blue-500 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">ReactJS</p>
//           </motion.div>

//           {/* Skill 3 */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <DiDocker className="h-20 w-20 text-blue-600 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">Docker</p>
//           </motion.div>

//           {/* Skill 4 */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <SiTensorflow className="h-20 w-20 text-orange-500 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">TensorFlow</p>
//           </motion.div>

//           {/* Skill 5 */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <BsGraphUp className="h-20 w-20 text-yellow-600 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">Power BI</p>
//           </motion.div>

//           {/* Skill 6 (Java) */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <FaJava className="h-20 w-20 text-red-600 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">Java</p>
//           </motion.div>

//           {/* Skill 7 (JavaScript) */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <FaJs className="h-20 w-20 text-yellow-300 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">JavaScript</p>
//           </motion.div>

//           {/* Skill 8 (GitHub) */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <FaGithub className="h-20 w-20 text-black shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">GitHub</p>
//           </motion.div>

//           {/* Skill 9 (SQL) */}
//           <motion.div variants={itemVariants} className="relative flex flex-col items-center justify-center">
//             <FaDatabase className="h-20 w-20 text-blue-700 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out" />
//             <p className="mt-2 text-lg font-medium text-gray-950">SQL</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }
import { IoLogoPython } from 'react-icons/io';
import { IoLogoReact } from "react-icons/io5";
import { DiDocker } from 'react-icons/di';
import { SiTensorflow } from 'react-icons/si';
import { BsGraphUp } from 'react-icons/bs';
import { FaJava } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: <IoLogoPython className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-yellow-500 animate-bounce" /> },
  { name: 'ReactJS', icon: <IoLogoReact className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-blue-500 animate-bounce" /> },
  { name: 'Docker', icon: <DiDocker className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-blue-600 animate-bounce" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-orange-500 animate-bounce" /> },
  { name: 'Power BI', icon: <BsGraphUp className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-yellow-600 animate-bounce" /> },
  { name: 'Java', icon: <FaJava className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-red-600 animate-bounce" /> },
  { name: 'JavaScript', icon: <FaJs className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-yellow-300 animate-bounce" /> },
  { name: 'GitHub', icon: <FaGithub className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-black animate-bounce" /> },
  { name: 'SQL', icon: <FaDatabase className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-blue-700 animate-bounce" /> },
];
export default function SkillsSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white">Skills & Expertise</h2>
          <p className="mt-8 text-base sm:text-lg md:text-xl font-medium text-gray-300">
            Leveraging cutting-edge tools to deliver innovative solutions.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center">
                {skill.icon}
                <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}