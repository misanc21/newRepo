"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context state
interface ContextType {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const Context = createContext<ContextType | undefined>(undefined);

// Props for the provider component
interface ProviderProps {
  children: ReactNode;
}

// Create the Provider component
export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Context.Provider value={{ showModal, setShowModal }}>
      {children}
    </Context.Provider>
  );
};

// Create a custom hook for consuming the context
export const useGlobalState = (): ContextType => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useYourContext must be used within a YourProvider");
  }
  return context;
};
