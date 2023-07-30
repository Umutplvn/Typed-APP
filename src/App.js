import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import Home from "./pages/Home"
import { ThemeContext } from "./themeContext"


function App() {
const {themes} =useContext(ThemeContext)
  return (
    <ThemeProvider theme={themes} >
      <Home />
   </ThemeProvider>
  )
}

export default App
