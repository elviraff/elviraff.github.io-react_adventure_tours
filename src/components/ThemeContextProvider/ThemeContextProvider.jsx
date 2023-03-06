import { useState } from "react"
import { ThemeContext } from "./ThemeContexProvider"


export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('default')
    return (
        <ThemeContext.Provider value = {{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}