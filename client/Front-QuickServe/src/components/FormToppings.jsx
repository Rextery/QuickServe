import { useState } from "react";
import Topping from "./Topping";

function FormToppings({ onNext }) {
  const [listaToppings, setListaToppings] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ListaToppings:listaToppings});
    console.log(listaToppings);
  };

  const addTopping = () => {
    const newIndex = Object.keys(listaToppings).length;
    setListaToppings({
      ...listaToppings,
      [newIndex]: { nombre_topping: "", topping_precio: ""}
    });
  };

  const handleToppingChange = (index, toppingData) => {
    setListaToppings({
      ...listaToppings,
      [index]: toppingData
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Crea los Toppings o extras de tu producto</h1>
      {Object.keys(listaToppings).map((key) => (
        <Topping
          key={key}
          formData={listaToppings[key]}
          handleChange={(e) => {
            const { name, value } = e.target;
            handleToppingChange(key, { ...listaToppings[key], [name]: value });
          }}
        />
      ))}
      <button
        type="button"
        onClick={addTopping}
        className="inline-block bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>

      <button
        type="submit"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default FormToppings;
