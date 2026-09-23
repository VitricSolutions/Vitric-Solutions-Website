import { createContext, useContext, useState, type ReactNode } from "react";

interface DemoContextType {
    isDemoOpen: boolean;
    openDemo: () => void;
    closeDemo: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider = ({ children }: { children: ReactNode }) => {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const openDemo = () => setIsDemoOpen(true);
    const closeDemo = () => setIsDemoOpen(false);

    return (
        <DemoContext.Provider value={{ isDemoOpen, openDemo, closeDemo }}>
            {children}
        </DemoContext.Provider>
    );
};

export const useDemo = () => {
    const context = useContext(DemoContext);
    if (!context) {
        throw new Error("useDemo must be used within a DemoProvider");
    }
    return context;
};
