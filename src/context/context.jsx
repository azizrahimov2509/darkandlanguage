import {createContext,useReducer} from "react";

export const darkMode = createContext();

function reducer(state, { type, payload = null }) {
  switch (type) {
    case "CHANGE_MODE":
      return { ...state, darkmode: !state.darkmode };
    case "CHANGE_LANGUAGE":
      return { ...state, language: payload };
    default:
      return state;
  }
}



export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, { darkmode: false, language: "uz" });

  function ChangeMode() {
    dispatch({ type: "CHANGE_MODE" });
  }

  function ChangeLanguage(language) {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  }

  return (
    <darkMode.Provider value={{ state, ChangeMode, ChangeLanguage }}>
      {children}
    </darkMode.Provider>
  );
}
