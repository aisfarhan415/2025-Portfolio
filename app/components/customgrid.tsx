import { motion } from "framer-motion";
import Link from "next/link"; // Import Link dari Next.js

type Project = {
  imgSrc: string;
  altText: string;
  logoSrc: string;
  name: string;
  year: string;
  link: string;
};

type ProjectGridProps = {
  projects: Project[];
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
      {projects.map((project, index) => (
        <Link href={project.link} key={index} passHref>
          <div className="w-full group relative overflow-hidden cursor-pointer">
            <motion.div
              className="relative w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={project.imgSrc}
                alt={project.altText}
                className="w-full h-auto object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 h-[94.37px] flex items-center">
                <img
                  src={project.logoSrc}
                  alt="Company Logo"
                  className="h-full"
                />
              </div>
            </motion.div>
            <div className="mt-4 flex justify-between">
              <p className="text-lg font-light lexend text-white">
                {project.name}
              </p>
              <p className="text-lg font-light lexend text-white opacity-50">
                {project.year}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;
