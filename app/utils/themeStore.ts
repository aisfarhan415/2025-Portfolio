import { create } from "zustand";

type Theme = "tactile" | "glass";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "tactile",
  toggleTheme: () => set((state) => ({ theme: state.theme === "tactile" ? "glass" : "tactile" })),
}));
