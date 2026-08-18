import { useQuery } from "@tanstack/react-query";

export const useAuthUser = () =>
  useQuery({
    queryKey: ["authUser"],

    queryFn: async () => {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      return data.user;
    },

    retry: false,
  });
