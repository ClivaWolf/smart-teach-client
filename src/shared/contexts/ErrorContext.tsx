'use client';
import React, {createContext, useContext, useState, ReactNode} from 'react';

interface ErrorContextProps {
    errorMessage: string;
    setErrorMessage: (message: string) => void;
    clearErrorMessage: () => void;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    const clearErrorMessage = () => setErrorMessage('');

    return (
        <ErrorContext.Provider value={{errorMessage, setErrorMessage, clearErrorMessage}}>
            {children}
        </ErrorContext.Provider>
    );
};

export const useError = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error('useError must be used within an ErrorProvider');
    }
    return context;
};
