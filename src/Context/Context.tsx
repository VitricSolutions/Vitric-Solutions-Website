import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Define the type for the context value
interface ContactContextType {
  isOpen: boolean;
  openContact: () => void;
  closeContact: () => void;
}

// Create the context with a default value of the correct type
const ContactContext = createContext<ContactContextType | null>(null);

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = () => setIsOpen(true);
  const closeContact = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ isOpen, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
};