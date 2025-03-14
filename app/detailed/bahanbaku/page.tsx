"use client";

import DetailedPage from "../../components/detailedpage";
import Navbar from "../../components/navbar";

export default function ProjectDetail() {
  return (
    <div>
      <Navbar />
      <DetailedPage
        title="BahanbaKu"
        imageSrc="/assets/bahanbaku-hero.png"
        client="BahanbaKu"
        position="UI/UX Designer"
        details={[
          "BahanbaKu originated as a Capstone Project at Bangkit Academy 2022, focusing on improving the efficiency and effectiveness of sourcing raw ingredients for cooking. After rigorous development, it advanced to the top 15 teams and was selected for an incubation program by Google, GoTo, Traveloka, and the Directorate General of Higher Education, Research, and Technology (Kemdikbudristek). The initiative aimed to empower young digital talents in Indonesia for the technology sector.",
        ]}
        credits={[
          "Rigel Vibi Ramadhan - Universitas Brawijaya",
          "Irvan Rizki Nugraha - Universitas Brawijaya",
          "Rifqi Hilmi Zhafrant - Universitas Brawijaya",
          "Sahdewi Bunga Safira - Universitas Sebelas Maret",
          "Ananda Ilyasa Putra - Universitas Sebelas Maret",
          "Syah Rizal Almedifa - UPN Veteran Yogyakarta",
          "Farhan Hisbullah A'isyi Basuki - Universitas Brawijaya",
        ]}
        showcases={[
          "/assets/bahanbaku-showcase1.png",
          "/assets/bahanbaku-showcase2.png",
        ]}
      />
    </div>
  );
}
