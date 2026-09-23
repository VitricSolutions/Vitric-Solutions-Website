import { createContext, useContext, useState, type ReactNode } from "react";

interface PartnerContextType {
    isPartnerOpen: boolean;
    openPartner: () => void;
    closePartner: () => void;
}

const PartnerContext = createContext<PartnerContextType | undefined>(undefined);

export const PartnerProvider = ({ children }: { children: ReactNode }) => {
    const [isPartnerOpen, setIsPartnerOpen] = useState(false);

    const openPartner = () => setIsPartnerOpen(true);
    const closePartner = () => setIsPartnerOpen(false);

    return (
        <PartnerContext.Provider value={{ isPartnerOpen, openPartner, closePartner }}>
            {children}
        </PartnerContext.Provider>
    );
};

export const usePartner = () => {
    const context = useContext(PartnerContext);
    if (!context) {
        throw new Error("usePartner must be used within a PartnerProvider");
    }
    return context;
};
