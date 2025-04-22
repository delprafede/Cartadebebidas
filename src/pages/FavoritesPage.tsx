import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

const FavoritesPage = () => {
  const loadFormStorage = useAppStore((state) => state.loadFormStorage);
  const favorites = useAppStore((state) => state.favorites);

  useEffect(() => {
    loadFormStorage();
    console.log(favorites);
  }, []);

  return (
    <>
      <h1 className=" text-6xl font-extrabold text-center">Favoritos</h1>
      <div className=" grid  md:grid-cols-2 lg:grid-cols-3  my-10 gap-10">
        {favorites.map( drink => (
          <DrinkCard
          key={drink.idDrink}
          drink={drink}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesPage;
