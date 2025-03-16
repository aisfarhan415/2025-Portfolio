import { create } from "zustand";
import { Linkedin } from "lucide-react";

interface ReviewState {
  currentIndex: number;
  reviews: {
    name: string;
    photo: string;
    position: string;
    linkedin: string;
    text: string;
  }[];
  nextReview: () => void;
  prevReview: () => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
  currentIndex: 0,
  reviews: [
    {
      name: "Miftah Ramadhan",
      photo: "/assets/miftah.jpg",
      position: "UI/UX Designer at ASTRA",
      linkedin: "https://www.linkedin.com/in/miftah-ramadhan/",
      text: "It is with great pleasure that I recommend my classmate from Universitas Brawijaya, who has been highly committed when handling various college project projects. Ais is one of my classmates interested in UI/UX Design. The ability of Ais as a UI/UX Designer is undoubted. He has excellent taste of UI design and knowledge of UI design references on various real apps. He is reliable in various responsibilities and can collaborate in a team, especially on UI/UX Design projects. His cheerful personality has made her stand out and bring joy to the team. I can't wait to see you on top!",
    },
    {
      name: "Fritz Adriano",
      photo: "/assets/fritz.jpg",
      position: "Information Technology Auditor at KPMG Indonesia",
      linkedin: "https://www.linkedin.com/in/fritz-adriano/",
      text: "Farhan is one of the most active and proactive individuals I know. As the main presidium at KBMTI in Brawijaya University, I have found it very helpful and relieving to work with Farhan. Besides that, he is also skilled in public speaking, persuading others, and encouraging positive vibes. It has been a pleasure working with Farhan over the past year, and I am confident that he will make a great leader.",
    },
    {
      name: "Della Akhidatul Izzah",
      photo: "/assets/delliz.jpg",
      position: "UI/UX Designer at Smartlink | Bachelor of Computer Science",
      linkedin: "https://www.linkedin.com/in/dellaizzah/",
      text: "Designed an application with Farhan in 2020 when we were interns at an organization. He shows thoroughness in design, care, and always discusses with me to form a solution that makes it easier for the target user of the application.",
    },
    {
      name: "Muhammad Ilman Nadhir",
      photo: "/assets/ilman.jpg",
      position: "Graduated from University of Brawijaya",
      linkedin: "https://www.linkedin.com/in/ilmannadhir/",
      text: "Me and farhan have known each other for several years and we have been in the same project a couple of times, and he's a very reliable person. He usually does UI/UX for the project.",
    },
    {
      name: "Irvan Rizki Nugraha",
      photo: "/assets/irvan.jpg",
      position: "Frontend Developer at DELOS",
      linkedin: "https://www.linkedin.com/in/irvan-rizki-n/",
      text: "Me and farhan have known each other for several years and we have been in the same project a couple of times, and he's a very reliable person. He usually does UI/UX for the project.",
    },
    {
      name: "Aldi Himawan",
      photo: "/assets/aldi.jpg",
      position: "Laravel Fullstack Developer at BRI",
      linkedin: "https://www.linkedin.com/in/aldihimawan/",
      text: "Me and Farhan Hisbullah A'isyi Basuki have known each other for about 3 years, and he has a good personality. He usually works as a UI/UX designer on mobile projects. I've seen his designs firsthand and worked in the same team as him to make a final project. He worked as a UI/UX designer and did his job very well. I'd like to work with you again on a future project or in the same company. Glad to meet you.",
    },
  ],
  nextReview: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.reviews.length,
    })),
  prevReview: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + state.reviews.length) % state.reviews.length,
    })),
}));