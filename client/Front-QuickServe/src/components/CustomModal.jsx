/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const CustomModal = ({ isOpen, onClose, selectedGlasses }) => {
  const { onOpenChange } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              {/* Contenido del modal utilizando la información de selectedGlasses */}
              <p>{selectedGlasses.alt}</p>
              <img className="rounded-lg" src={selectedGlasses.src} alt={selectedGlasses.alt} />
            </ModalBody>
            <ModalFooter>
              {/* <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
