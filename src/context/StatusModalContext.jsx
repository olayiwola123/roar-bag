import { createContext, useContext, useState, useEffect } from "react";
const StatusModalContext = createContext();

export default StatusModalContext;

export const StatusModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => setModal(true);
  const handleCloseModal = () => setModal(false);
  const [modalType, setModalType] = useState("");
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Ok");
  const [storedFunction, setStoredFunction] = useState(null);

  const sammySuccess = (text, buttonText = null, func = null) => {
    setStoredFunction(null);
    setModalType("success");
    handleOpenModal();
    setText(text);
    setButtonText(buttonText ? buttonText : "Ok");
    if (func) {
      setStoredFunction(() => () => func());
    }
  };
  const sammyError = (text, buttonText = null, func = null) => {
    setStoredFunction(null);
    setModalType("error");
    handleOpenModal();
    setText(text);
    setButtonText(buttonText ? buttonText : "Ok");
    if (func) {
      setStoredFunction(() => () => func());
    }
  };
  
  

  let contextData = {
    isOpen: modal,
    onClose: handleCloseModal,
    onOpen: handleOpenModal,
    sammySuccess,
    sammyError,
    modalType,
    text, 
    buttonText,
    storedFunction
  };

  return (
    <StatusModalContext.Provider value={contextData}>
      {children}
    </StatusModalContext.Provider>
  );
};

export const useStatusModalContext = () => useContext(StatusModalContext);
