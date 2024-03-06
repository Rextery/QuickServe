import { useState } from "react";
import CustomModal from "./CustomModal";

const Card = () => {
  const ImagesGlasses = [
    {
      id: 1,
      src: "/vasos/Vaso1.webp",
      alt: "Vaso 1",
    },
    {
      id: 2,
      src: "/vasos/Vaso2.webp",
      alt: "Vaso 2",
    },
    {
      id: 3,
      src: "/vasos/Vaso3.webp",
      alt: "Vaso 3",
    },
    {
      id: 4,
      src: "/vasos/Vaso4.webp",
      alt: "Vaso 4",
    },
    {
      id: 5,
      src: "/vasos/Vaso5.webp",
      alt: "Vaso 5",
    },
    {
      id: 6,
      src: "/vasos/Vaso6.webp",
      alt: "Vaso 6",
    },
  ];

  // Modal
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const openModal = (glasses) => {
    setSelectedGlasses(glasses);
  };

  const closeModal = () => {
    setSelectedGlasses(null);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {ImagesGlasses.map((glasses) => (
          <div
            key={glasses.id}
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 max-w-xs"
            onClick={() => openModal(glasses)}
          >
            <img
              className="object-cover w-full h-64 md:h-64 rounded-t-lg rounded-tr-lg md:rounded-none md:rounded-tl-lg md:rounded-tr-lg md:rounded-bl-lg md:rounded-br-lg"
              src={glasses.src}
              alt={glasses.alt}
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
              <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                {glasses.alt}
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedGlasses && (
        <CustomModal
          isOpen={true} // Aquí puedes usar un estado o prop para manejar la apertura y cierre del modal
          onClose={closeModal}
          selectedGlasses={selectedGlasses}
        />
      )}
    </div>
  );
};

export default Card;
