import React, { useState } from "react";

interface ITheme {
  primaryColor: string
  secondaryColor: string
}

interface ThemeContextType {
  theme: ITheme;
}

const defaultInitTheme: ITheme = {
  primaryColor: "blue",
  secondaryColor: "green"
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: {
    primaryColor: "blue",
    secondaryColor: "green"
  },
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(defaultInitTheme)

  return (<ThemeContext.Provider value={{ theme }}>
    {children}
  </ThemeContext.Provider>
  );
};
