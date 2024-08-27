import { createContext, useEffect, useState } from "react";

export const Window = createContext('')

export default function WindowScreen({ children }) {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <Window.Provider value={windowSize}>
            {children}
        </Window.Provider>
    )
}