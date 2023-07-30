import { useContext } from "react";
import { HomeMain, HomeTitle } from "./Home.styled";
import { ThemeContext } from "../themeContext";
import { darkTheme, lightTheme } from "../theme";
import ReactTyped from "react-typed";

const Home = () => {
  const { themes, setThemes } = useContext(ThemeContext);

  const handleTema = () => {
    if (themes == lightTheme) {
      setThemes(darkTheme);
    } else if (themes == darkTheme) {
      setThemes(lightTheme);
    }
  };

  return (
    <HomeMain>
      <HomeTitle>
        {" "}
        <ReactTyped
          strings={[
            "THIS PAGE IS CREATED TO TEST STYLED COMPONENTS AND THEME STRUCTURE",
          ]}
          typeSpeed={70}
          backSpeed={10}
          loop
        />{" "}
      </HomeTitle>

      <button onClick={handleTema}>SET THEME</button>
    </HomeMain>
  );
};

export default Home;
