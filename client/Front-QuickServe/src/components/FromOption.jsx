import { useState } from "react";
import Option from "./Option";

function FormOption({ onNext }) {
  const [listaOpciones, setListaOpciones] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ ListaOpciones: listaOpciones });
    console.log(listaOpciones);
  };

  const addOption = () => {
    const newIndex = Object.keys(listaOpciones).length;
    setListaOpciones({
      ...listaOpciones,
      [newIndex]: { nombre_opcion: "", descripcion_opcion: "", precio_opcion: "", src: "" }
    });
  };

  const handleOptionChange = (index, optionData) => {
    setListaOpciones({
      ...listaOpciones,
      [index]: optionData
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Crea las opciones de tu producto</h1>
      {Object.keys(listaOpciones).map((key) => (
        <Option
          key={key}
          formData={listaOpciones[key]}
          handleChange={(e) => {
            const { name, value } = e.target;
            handleOptionChange(key, { ...listaOpciones[key], [name]: value });
          }}
        />
      ))}
      <button
        type="button"
        onClick={addOption}
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
    </form>
  );
}

export default FormOption;
