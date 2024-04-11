import React, { createContext, useContext, ReactNode } from 'react'

interface CarState {
    cars: string[]
}

const CarContext = createContext<CarState | undefined>(undefined);

export const CarProvider: React.FC<{ children:ReactNode }> = ({children}) => {
    const initialState: CarState = {
        cars: ["Model 3", "Model Y", "Model S", "Model X", "Solar Roof"]
    }

    return (
        <CarContext.Provider value={initialState}>
            {children}
        </CarContext.Provider>
    )
}

export const useCarContext = (): CarState => {
    const context = useContext(CarContext)
    if (!context) {
        throw new Error('useCarContext must be used within a provider')
    }
    return context
}