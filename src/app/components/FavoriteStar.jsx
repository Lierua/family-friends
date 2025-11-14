"use client";
import { CiStar } from "react-icons/ci";
import useFavoriteStore from "../store/MakeFavorite";

const FavoriteStar = ({ size = "30px", id }) => {
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const active = isFavorite(id);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer"
      style={{ width: size, height: size }}
    >
      <span
        className="absolute rounded-full bg-white/40"
        style={{
          width: size,
          height: size,
          top: 1,
          left: 0,
          zIndex: 0,
        }}
      ></span>

      <CiStar
        className={`relative z-[10] transition-colors ${
          active ? "color-black" : "text-white"
        }`}
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

export default FavoriteStar;
