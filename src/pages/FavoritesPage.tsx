import { useEffect, useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

const FavoritesPage = () => {
  const loadFormStorage = useAppStore((state) => state.loadFormStorage);
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorites = useMemo(() => favorites.length, [favorites]);

  useEffect(() => {
    loadFormStorage();
    console.log(favorites);
  }, []);

  return (
    <>
      <h1 className=" text-6xl font-extrabold text-center">Favoritos</h1>
      {hasFavorites ? (
        <div className=" grid  md:grid-cols-2 lg:grid-cols-3  my-10 gap-10">
          {favorites.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p className=" text-center text-2xl mt-10">Tus favoritos se mostraran aquí</p>
      )}
    </>
  );
};

export default FavoritesPage;
