import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AssessmentContextType {
    isAssessmentOpen: boolean;
    openAssessment: () => void;
    closeAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | null>(null);

interface AssessmentProviderProps {
    children: ReactNode;
}

export const AssessmentProvider = ({ children }: AssessmentProviderProps) => {
    const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

    const openAssessment = () => setIsAssessmentOpen(true);
    const closeAssessment = () => setIsAssessmentOpen(false);

    return (
        <AssessmentContext.Provider value={{ isAssessmentOpen, openAssessment, closeAssessment }}>
            {children}
        </AssessmentContext.Provider>
    );
};

export const useAssessment = () => {
    const context = useContext(AssessmentContext);
    if (!context) {
        throw new Error("useAssessment must be used within AssessmentProvider");
    }
    return context;
};
