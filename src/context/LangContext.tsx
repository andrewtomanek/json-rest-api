import * as React from "react";
import LanguageSwitch from "../components/LanguageSwitch";
interface ContextProps {
  children?: React.ReactNode;
}

const defaultLanguage: string = "cs-CZ";
export const LangContext = React.createContext(defaultLanguage);

export const LangProvider: React.FunctionComponent<ContextProps> = props => {
  const [language, setLanguage] = React.useState(defaultLanguage);

  React.useEffect(() => {
    setLanguage(defaultLanguage);
  }, []);

  const updateLanguage = (languageString: string) => {
    setLanguage(languageString);
  };

  return (
    <LangContext.Provider value={language}>
      <LanguageSwitch changeLanguage={updateLanguage} language={language} />
      {props.children}
    </LangContext.Provider>
  );
};
