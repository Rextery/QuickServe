
function Topping({ formData, handleChange }) {
  return (
    <div><h2 className="text-2xl font-bold mb-4">Agregar toppings</h2>
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
        pattern="[A-Za-z0-9\s]+"
        title="Ingrese solo letras y números, sin caracteres especiales"
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
        min={0}
        max={500000}
        value={formData.topping_precio}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
      />
    </div></div>
  )
}

export default Topping