function Option({ formData, handleChange }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Agregar opciones</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Nombre de la opcion
          </label>
          <input
            type="text"
            name="nombre_opcion"
            id="nombre_opcion"
            pattern="[A-Za-z0-9\s]+"
            title="Ingrese solo letras y números, sin caracteres especiales"
            value={formData.nombre_opcion}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            name="descripcion_opcion"
            id="descripcion_opcion"
            pattern="[A-Za-z0-9\s]+"
            title="Ingrese solo letras y números, sin caracteres especiales"
            value={formData.descripcion_opcion}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <input
            type="number"
            name="precio_opcion"
            id="precio_opcion"
            min={0}
            max={500000}
            value={formData.precio_opcion}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Url de la imagen
          </label>
          <input
            type="url"
            name="src"
            id="src"
            value={formData.src}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
          />
        </div>
      </div>
    );
  }
  
  export default Option;
  