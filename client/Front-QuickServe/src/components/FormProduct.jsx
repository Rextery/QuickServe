import { useState } from "react";


function FormProduct({ onNext }) {

  const [formData, setFormData] = useState({
    nombre_producto: "",
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
  };



  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Nombre del producto
        </label>
        <input
          type="text"
          name="nombre_producto" 
          id="nombre_producto"
          pattern="[A-Za-z0-9\s]+"
          title="Ingrese solo letras y números, sin caracteres especiales"
          value={formData.nombre_producto}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Continuar
      </button>
    </form>
  );
}

export default FormProduct;
