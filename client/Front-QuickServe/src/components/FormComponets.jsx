import { useState } from "react";
import Complement from "./Complement";

function FormComponets({ onNext, onback }) {
  const [listaComplement, setListaComplement] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ ListaComplement: listaComplement });
    console.log(listaComplement);
  };

  const addComplement = () => {
    const newIndex = Object.keys(listaComplement).length;
    setListaComplement({
      ...listaComplement,
      [newIndex]: {
        nombre_Componente: "",
        descripcion: "",
        complemento_disponible: "",
      },
    });
  };

  const handleComplementChange = (index, complementData) => {
    setListaComplement({
      ...listaComplement,
      [index]: complementData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">
        Crea las complementos de tu producto
      </h1>
      {Object.keys(listaComplement).map((key) => (
        <Complement
          key={key}
          formData={listaComplement[key]}
          handleChange={(e) => {
            const { name, value } = e.target;
            handleComplementChange(key, {
              ...listaComplement[key],
              [name]: value,
            });
          }}
        />
      ))}
      <button
        type="button"
        onClick={addComplement}
        className="inline-block bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        +
      </button>
      <button
        type="submit"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Continuar
      </button>
      <button
        type="button"
        onClick={onback}
        className="inline-block bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Atras
      </button>
    </form>
  );
}

export default FormComponets;
