"use client";

import DetailedPage from "../../components/detailedpage";
import Navbar from "../../components/navbar";

export default function ProjectDetail() {
  return (
    <div>
      <Navbar />
      <DetailedPage
        title="Coche"
        imageSrc="/assets/coche-hero.png"
        client="Personal Project"
        position="UI/UX Designer"
        details={[
          "Coche is a personal project designed to simplify the car rental process with a modern, intuitive, and user-friendly experience. The platform provides a seamless way for users to browse, book, and manage car rentals effortlessly, eliminating the complexities often associated with traditional rental services.",
          "As the UI/UX Designer and Front-End Developer, I was responsible for crafting an intuitive interface and developing a responsive web experience. The project focuses on accessibility, efficiency, and a visually appealing design that enhances the overall rental experience.",
          "Coche was built using React (Next.js) with TypeScript for a scalable and maintainable codebase. The front-end leverages ShadCN for UI components and Framer Motion for smooth animations. The back-end, developed in collaboration with Aditya, utilizes Node.js and Firebase for efficient data handling and authentication.",
        ]}
        credits={["UI/UX Designer - Farhan Hisbullah A'isyi Basuki"]}
        showcases={[
          "/assets/coche-showcase1.png",
          "/assets/coche-showcase2.png",
        ]}
        buttonText="View the Figma Design"
        buttonOnClick={() =>
          window.open(
            "https://www.figma.com/design/F743VXKROQK4HIkpjRIFVT/Coche?node-id=0-1&t=wluwd4SJDrkQhQaS-1",
            "_blank"
          )
        }
      />
    </div>
  );
}
