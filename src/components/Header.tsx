import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

const Header = () => {
  const { pathname } = useLocation();
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    categories: "",
  });

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
   
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validar
    if (Object.values(searchFilters).includes("")) {
      alert("Please select a category or ingredient");
      return;
    }
    //Consultar las recetas
    searchRecipes(searchFilters);
  };


  return (
    <>
      <header
        className={
          isHome ? "bg-[url(/bg.jpg)] bg-center bg-cover" : "bg-slate-800"
        }
      >
        <div className="max-auto container px-5 py-16">
          <div className=" flex justify-between items-center">
            <div>
              <img className="w-32" src="./logo.svg" alt="logotipo" />
            </div>
            <nav className=" flex gap-2">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? " text-orange-500 font-bold uppercase"
                    : "text-white font-bold uppercase"
                }
              >
                {" "}
                Inicio
              </NavLink>
              <NavLink
                to={"/favoritos"}
                className={({ isActive }) =>
                  isActive
                    ? " text-orange-500 font-bold uppercase"
                    : "text-white font-bold uppercase"
                }
              >
                {" "}
                Favoritos
              </NavLink>
            </nav>
          </div>
          {isHome && (
            <form
              onSubmit={handleSubmit}
              className=" md:w-1/2 2xl: w-1/3  bg-orange-400 my-32 space-y-6 p-10 rounded-lg shadow "
            >
              <div className=" space-y-4">
                <label
                  htmlFor="ingredient"
                  className=" text-white block uppercase font-extrabold text-lg "
                >
                  Nombre o Ingredientes
                </label>
                <input
                  id="ingredient"
                  type="text"
                  name="ingredient"
                  className=" bg-white p-3 w-full rounded-lg focus:outline-none"
                  placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Coffe"
                  onChange={handleChange}
                  value={searchFilters.ingredient}
                />
              </div>
              <div className=" space-y-4">
                <label
                  htmlFor="categories"
                  className=" text-white block uppercase font-extrabold text-lg "
                >
                  Categoria
                </label>
                <select
                  id="categories"
                  name="categories"
                  className=" bg-white p-3 w-full rounded-lg focus:outline-none"
                  onChange={handleChange}
                  value={searchFilters.categories}
                >
                  <option value="">-- Seleccione --</option>
                  {categories.drinks.map((category) => {
                    return (
                      <option
                        value={category.strCategory}
                        key={category.strCategory}
                      >
                        {category.strCategory}
                      </option>
                    );
                  })}
                </select>
              </div>
              <input
                type="submit"
                value="Buscar Receta"
                className=" cursor-pointer bg-mint-500 text-white font-extrabold w-full p-2 rounded-lg uppercase backgroundImage"
              />
            </form>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
