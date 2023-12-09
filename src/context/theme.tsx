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
const body = document.querySelector("body");
const ThemeContext = createContext<any>({});

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(
     true
  );
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
    return isDarkMode ?  imageName.light: imageName.dark;
  };

  const assets = {
    github: getImage({ light: githubLight, dark: githubDark }),
    linkedin: getImage({ light: linkedinLight, dark: linkedinDark }),
    gmail: getImage({ light: gmailLight, dark: gmailDark }),
    whatsapp: getImage({ light: whatsappLight, dark: whatsappDark }),
    theme: getImage({ light: themeLight, dark: themeDark }),
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, assets, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
