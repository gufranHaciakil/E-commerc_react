import { createContext, useState } from "react";
export const menu = createContext('')

export default function MenuContext({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <menu.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </menu.Provider>
    )

}