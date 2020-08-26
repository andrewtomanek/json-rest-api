import * as React from "react";
interface ContextProps {
  children?: React.ReactNode;
}

const defaultLanguage: string = "cs-CZ";
export const LangContext = React.createContext(defaultLanguage);
export const LangDispatchContext: any = React.createContext(undefined);

export const LangProvider: React.FunctionComponent<ContextProps> = (props) => {
  const [language, setLanguage] = React.useState(defaultLanguage);

  React.useEffect(() => {
    setLanguage(defaultLanguage);
  }, []);

  return (
    <LangContext.Provider value={language}>
      <LangDispatchContext.Provider value={setLanguage}>
        {props.children}
      </LangDispatchContext.Provider>
    </LangContext.Provider>
  );
};
