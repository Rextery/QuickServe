import React, { useState } from "react";
import FormProduct from "./FormProduct";
import FormOption from "./FromOption";
import FormComponets from "./FormComponets";
import FormToppings from "./FormToppings";
import { Navigate } from 'react-router-dom';

function FormsAdmin() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleNext = (formData) => {
    setData({ ...data, ...formData });
    setStep(step + 1);
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <FormProduct onNext={handleNext} />;
      case 2:
        return <FormOption onNext={handleNext} />;
      case 3:
        return <FormComponets onNext={handleNext} />;
      case 4:
        return <FormToppings onNext={handleNext} />;
      default:
        return <Navigate to="/admin" />;
    }
  };

  return <div className="max-w-md mx-auto">{renderForm()}</div>;
}

export default FormsAdmin;
