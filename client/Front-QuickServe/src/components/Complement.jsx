
function Complement({ formData, handleChange }) {
  return (
    <>
    <h2 className="text-2xl font-bold mb-4">Agregar Componentes</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Nombre del componentes
        </label>
        <input
          type="text"
          name="nombre_Componente"
          value={formData.nombre_Componente}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
        />
      </div>
      <div className="mb-6">
        <label
          
          className="block text-sm font-medium text-gray-700"
        >
          Descripción
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows="3"
          className="mt-1 block w-full px-3 py-2 rounded-md shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 sm:text-sm"
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          className="block text-sm font-medium text-gray-700"
        >
          Disponible
        </label>
        <input
          type="checkbox"
          name="complemento_disponible"
          id="complemento_disponible"
          checked={formData.complemento_disponible}
          onChange={handleChange}
          className="mt-1 block"
        />
      </div>
    </>
  )
}

export default Complement