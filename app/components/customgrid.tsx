import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  imgSrc: string;
  altText: string;
  logoSrc: string;
  name: string;
  year: string;
  link: string;
};

type ProjectGridProps = { projects: Project[] };

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <Link href={project.link} className="ui-surface group block overflow-hidden rounded-2xl">
            <div className="relative h-52 overflow-hidden border-b border-slate-100 bg-slate-50">
              <Image
                src={project.imgSrc}
                alt={project.altText}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <motion.div whileHover={{ y: -2 }} className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-2 shadow">
                <Image src={project.logoSrc} alt={`${project.name} logo`} width={96} height={28} className="h-7 w-auto" />
              </motion.div>
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <span className="code-font text-xs text-slate-500">{project.year}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
