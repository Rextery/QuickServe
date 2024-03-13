import { useState } from "react";
import Option from "./Option";

function FormOption({ onNext, onback }) {
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
      [newIndex]: {
        nombre_opcion: "",
        descripcion_opcion: "",
        precio_opcion: "",
        src: null,
      },
    });
  };

  const handleOptionChange = (index, optionData) => {
    setListaOpciones({
      ...listaOpciones,
      [index]: optionData,
    });
  };

  const handleFileChange = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setListaOpciones({
        ...listaOpciones,
        [index]: {
          ...listaOpciones[index],
          src: reader.result.split(',')[1],
        },
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">
        Crea las opciones de tu producto
      </h1>
      {Object.keys(listaOpciones).map((key) => (
        <Option
          key={key}
          formData={listaOpciones[key]}
          handleChange={(e) => {
            const { name, value } = e.target;
            handleOptionChange(key, { ...listaOpciones[key], [name]: value });
          }}
          handleChangeSrc={(e) => handleFileChange(key, e.target.files[0])}
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
      <button
        type="button"
        onClick={onback}
        className="inline-block bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Atras
      </button>
    </form>
  );
}

export default FormOption;
