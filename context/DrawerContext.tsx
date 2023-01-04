import {createContext, useCallback, useContext, useState} from 'react';

interface DrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as DrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
  };
  
interface DrawerProviderProps {
    children: React.ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(!isDrawerOpen);
    }, [isDrawerOpen]);

    
    return(
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}