// ThemeContext.js
import { createContext, useContext, useState } from "react";
import githubLight from "./../assets/github.svg";
import githubDark from "./../assets/githubDark.svg";
import linkedinLight from "./../assets/linkedin.svg";
import linkedinDark from "./../assets/linkedinDark.svg";
import gmailLight from "./../assets/gmail.svg";
import gmailDark from "./../assets/gmailDark.svg";
import whatsappLight from "./../assets/whatsapp.svg";
import whatsappDark from "./../assets/whatsappDark.svg";
import themeLight from "./../assets/theme.svg";
import themeDark from "./../assets/themeDark.svg";
import Home from "../components/Home";
import About from "../components/About";
import RenderProjects from "../components/Projects";
import RenderContact from "../components/Contact";
const body = document.querySelector("body");
const ThemeContext = createContext<any>({});

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [themeDialog, setThemeDialog] = useState("light");
  const [selectedPage, setSelectedPage] = useState<string>("Home");
  const pages: any = {
    Home: <Home />,
    Sobre: <About />,
    Projetos: <RenderProjects />,
    Contact:<RenderContact/>
  };
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    themeDialog === "dark" ? setThemeDialog("dark") : setThemeDialog("light");
    if (body?.classList.contains("dark")) {
      body?.classList.remove("dark");
      body?.classList.add("light");
    } else {
      body?.classList.remove("light");
      body?.classList.add("dark");
    }

    setIsDarkMode((prev) => !prev);
  };

  const getImage = (imageName: any) => {
    return isDarkMode ? imageName.light : imageName.dark;
  };
  const getImageDialog = (imageName: any) => {
    return isDarkMode ? imageName.dark : imageName.light;
  };
  const assets = {
    github: getImage({ light: githubLight, dark: githubDark }),
    linkedin: getImage({ light: linkedinLight, dark: linkedinDark }),
    gmail: getImage({ light: gmailLight, dark: gmailDark }),
    whatsapp: getImage({ light: whatsappLight, dark: whatsappDark }),
    theme: getImage({ light: themeLight, dark: themeDark }),
  };
  const assetsDialog = {
    github: getImageDialog({ light: githubLight, dark: githubDark }),
    linkedin: getImageDialog({ light: linkedinLight, dark: linkedinDark }),
    gmail: getImageDialog({ light: gmailLight, dark: gmailDark }),
    whatsapp: getImageDialog({ light: whatsappLight, dark: whatsappDark }),
    theme: getImageDialog({ light: themeLight, dark: themeDark }),
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        assets,
        theme,
        assetsDialog,
        selectedPage,
        setSelectedPage,
        pages,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useContextPage = () => {
  return useContext(ThemeContext);
};
