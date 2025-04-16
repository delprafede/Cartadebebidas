// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';
import { JSX } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { SelectDrink } from "../types";

const Modal = () => {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectdDrink = useAppStore((state) => state.selectdDrink);

  const renderIngredients = ()=> {
    
    const ingredients : JSX.Element[] = [];
    for(let i=1; i <= 6; i++) {
      const ingredient = selectdDrink[`strIngredient${i}` as keyof SelectDrink]
      const measure = selectdDrink[`strMeasure${i}` as keyof SelectDrink]
    if (ingredient && measure) {
      ingredients.push(
        <li key={i} className="flex items-center mb-2">
          {ingredient} - {measure}
        </li>
      )
    }
    }
    return ingredients
  }
  return (
    <>
      <Dialog
        open={modal}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={closeModal}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen bgopa overflow-y-auto bg-opacity-70 ">
          <div className="flex min-h-full items-center justify-center p-4 bg-stone-500/40">
            <DialogPanel
              transition
              className="w-full  max-w-md rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className=" font-medium text-black text-2xl text-center"
              >
                {selectdDrink.strDrink}
              </DialogTitle>
              <div className=" p-2">
                <img
                  className=" w-96 mx-auto"
                  src={selectdDrink.strDrinkThumb}
                  alt={selectdDrink.strDrink}
                />
              </div>
              <DialogTitle
                as="h3"
                className="  text-black text-2xl text-center font-extrabold my-5"
              >
                Ingredientes y Cantidades
              </DialogTitle>
              <p>
              {renderIngredients()}
              </p>
              <DialogTitle
                as="h3"
                className="  text-black text-2xl text-center
                  font-extrabold my-5"
              >
                Instrucciones
              </DialogTitle>
              <p>{selectdDrink.strInstructions}</p>
              <div className="mt-4 flex justify-between gap-4">
                <Button
                  className=" w-full items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={closeModal}
                >
                  Cerrar
                </Button>
                <Button
                  className=" w-full items-center gap-2 rounded-md bg-orange-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-orange-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  // onClick={}
                >
                  Agregar a Favoritos
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default Modal;

// export default function MyModal() {
//   let [isOpen, setIsOpen] = useState(true);

//   function open() {
//     setIsOpen(true);
//   }

//   function close() {
//     setIsOpen(false);
//   }

//   return (
//     <>
//       <Button
//         onClick={open}
//         className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
//       >
//         Open dialog
//       </Button>
//     </>
//   );
// }
