import DetailedPage from "../components/detailedpage";
import Navbar from "../components/navbar";

export default function ProjectDetail() {
  return (
    <div>
      <Navbar />
      <DetailedPage
        title="Ekatalog SIPASTI"
        imageSrc="/assets/ekatalog-hero.svg"
        client="Kementerian Pekerjaan Umum"
        position="Front End Developer | UI/UX Designer"
        details={[
          "As part of the Indonesian Ministry of PUPR’s digital transformation efforts, SIPASTI was developed to enhance transparency, efficiency, and accuracy in procurement processes. My role? Crafting an intuitive, accessible, and visually cohesive UI/UX that simplifies complex data while ensuring a seamless user experience.",
        ]}
        credits={[
          "UI/UX Designer & Front-End Developer - Farhan",
          "Backend Developer - Aditya",
        ]}
        showcases={[
          "/assets/sipasti-showcase1.svg",
          "/assets/sipasti-showcase2.svg",
          "/assets/sipasti-showcase3.svg",
          "/assets/sipasti-showcase4.svg",
        ]}
      />
    </div>
  );
}
