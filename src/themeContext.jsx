import { createContext, useState } from "react";
import { lightTheme } from "./theme";


export const ThemeContext = createContext()


const ThemeContextProvider =({children})=>{

const[themes, setThemes]=useState(lightTheme)


return(
    <ThemeContext.Provider value={{themes, setThemes}}>{children}</ThemeContext.Provider>
)
}

export default ThemeContextProvider

