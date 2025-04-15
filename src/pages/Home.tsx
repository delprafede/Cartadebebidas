import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

const Home = () => {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);
  return (
    <div className=" grid  md:grid-cols-2 lg:grid-cols-3  my-10 gap-10">
      {hasDrinks ? (
        <>
          {drinks.drinks.map((drink) => {
            return <DrinkCard key={drink.idDrink} drink={drink} />;
          })}
        </>
      ) : (
        <p className=" my-10 text-center text-2xl">
          No hay resultados aun, utiliza el formulario para buscar recetas
        </p>
      )}
    </div>
  );
};

export default Home;
