import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type Project = {
  imgSrc: string;
  altText: string;
  logoSrc: string;
  name: string;
  year: string;
  link: string;
};

type ProjectGridProps = { projects: Project[] };

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 150, damping: 20 });

  const glareX = useSpring(useTransform(x, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });
  const glareY = useSpring(useTransform(y, [0, 1], [0, 100]), { stiffness: 150, damping: 20 });
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    glareOpacity.set(0);
  };

  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full w-full"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="h-full w-full"
        >
          <Link
            href={project.link}
            className="ui-surface group relative block overflow-hidden rounded-2xl h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
            {...(project.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <div className="relative h-52 overflow-hidden border-b border-slate-100 bg-slate-50" style={{ transform: "translateZ(20px)" }}>
              <Image
                src={project.imgSrc}
                alt={project.altText}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <motion.div whileHover={{ y: -2 }} className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-2 shadow" style={{ transform: "translateZ(30px)" }}>
                <Image src={project.logoSrc} alt={`${project.name} logo`} width={96} height={28} className="h-7 w-auto" />
              </motion.div>
            </div>
            <div className="flex items-center justify-between px-4 py-3 bg-white" style={{ transform: "translateZ(10px)" }}>
              <h3 className="font-semibold text-slate-900">{project.name}</h3>
              <span className="code-font text-xs text-slate-500">{project.year}</span>
            </div>

            {/* Glare overlay */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                background: glareBg,
                opacity: glareOpacity,
                pointerEvents: "none",
                mixBlendMode: "overlay",
                zIndex: 20,
              }}
            />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;

