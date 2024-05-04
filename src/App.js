import Home from "./components/Home/Home";
import { useState, createContext } from "react";
import './App.css';

function App() {
  const [language, setLanguage] = useState(localStorage.getItem("language") || 'EN');

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <Home></Home>
    </LanguageContext.Provider>
  );
}

export default App;

export const LanguageContext = createContext();