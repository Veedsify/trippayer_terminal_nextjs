import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  token: string | null;
  user: any | null;
  setAuth: ({ token, user }: { token: string, user: any }) => void;
}

const useAuthStore = create<AuthStore>()(persist(
  (set, get) => ({
    token: null,
    user: null,
    setAuth: ({ token, user }) => set({ token: token, user: user }),
  }),
  {
    name: "auth-storage",
    storage: createJSONStorage(() => localStorage)
  },
))

export default useAuthStore;
