import React, { useState } from "react";
import { createContext } from "react";
export const inputData = createContext()
export default function Context({ children }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    return (
        <inputData.Provider value={{ firstName, setFirstName, lastName, setLastName }}>


            {children}
        </inputData.Provider>
    )
}