import "./App.css";

import { MovieContext, ThemeContext } from "./context";
import { useState } from "react";
import Page from "./Page";

function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

// createContext(defaultValue) return object
// SomeContext.Provider (Wrap components with a provider)
// SomeContext.Consumer (Consume the context)

// Header (logo, icons (add to card numbers), etc)

// sidebar movie list (movie card, => image, rating, onClick(add to card), onClick (details) ,  )

// app => header , main (app, sidebar, movie list) footer
