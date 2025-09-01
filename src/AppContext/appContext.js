import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toogleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return <AppContext.Provider value={{
        isOpen,
        toogleIsOpen
    }} >
        {children}
    </AppContext.Provider>
};