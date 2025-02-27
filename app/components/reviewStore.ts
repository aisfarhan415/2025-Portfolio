import { create } from "zustand";

interface ReviewState {
  currentIndex: number;
  reviews: {
    name: string;
    photo: string;
    text: string;
  }[];
  nextReview: () => void;
  prevReview: () => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
  currentIndex: 0,
  reviews: [
    {
      name: "Dimas Ramadhan",
      photo: "/assets/miftah.jpg",
      text: "Farhan is one of the most active and proactive individuals I know...",
    },
    {
      name: "Sarah Johnson",
      photo: "/assets/sarah.jpg",
      text: "Farhan is an exceptional leader who motivates his team...",
    },
    {
      name: "Michael Lee",
      photo: "/assets/michael.jpg",
      text: "I've worked with Farhan on multiple projects, and he always delivers...",
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
