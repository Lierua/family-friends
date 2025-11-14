"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const MakeFavorite = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (id) => {
        const current = get().favorites;
        const isFav = current.includes(id);
        set({
          favorites: isFav
            ? current.filter((fav) => fav !== id)
            : [...current, id],
        });
      },
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "favorite-storage",
    }
  )
);

export default MakeFavorite;
