import { useState } from "react";

function FormToppings({ onNext }) {
  const [formData, setFormData] = useState({
    nombre_topping: "",
    topping_precio: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
    console.log(formData);
  };






  return (
    <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Agregar toppings</h2>
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Nombre del Topping
        </label>
        <input
          type="text"
          name="nombre_topping"
          id="nombre_topping"
          value={formData.nombre_topping}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Precio del Topping
        </label>
        <input
          type="number"
          name="topping_precio"
          id="topping_precio"
          value={formData.topping_precio}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
        />
      </div>

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
