import React, { useState } from "react";
import FormProduct from "./FormProduct";
import FormOption from "./FormOption";
import FormComponets from "./FormComponets";
import FormToppings from "./FormToppings";
import { Navigate, Link } from "react-router-dom";

function FormsAdmin() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleNext = (formData) => {
    setData({ ...data, ...formData });
    setStep(step + 1);
  };

  const handleBack = () => {
    const newData = { ...data };
    delete newData[`step${step}`];
    setData(newData);
    setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <FormProduct onNext={handleNext} />;
      case 2:
        return <FormOption onNext={handleNext} onback={handleBack} />;
      case 3:
        return <FormComponets onNext={handleNext} onback={handleBack} />;
      case 4:
        return <FormToppings onNext={handleNext} onback={handleBack} />;
      default:
        return console.log(data);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-gray-800 text-white w-full md:w-1/4 p-4">
        <div className="text-lg font-bold mb-10">Usuario: Nombre Usuario</div>

        <Link
          to="/admin"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Inicio
        </Link>

        <Link
          to="/admin/CrearProducto"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Crear Producto
        </Link>
        <Link to="#" className="block py-2 px-4 text-white hover:bg-gray-700">
          Listar Productos
        </Link>
      </div>

      <div className="w-full md:w-3/4 p-4 m-5">{renderForm()}</div>
    </div>
  );
}

export default FormsAdmin;
