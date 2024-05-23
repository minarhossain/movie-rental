import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";
import { useState } from "react";

function App() {
  const [movieData, setMovieData] = useState([]);
  return (
    <MovieContext.Provider value={{ movieData, setMovieData }}>
      <Header />
      <main>
        <div className="flex justify-around">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </MovieContext.Provider>
  );
}

export default App;

// createContext(defaultValue) return object
// SomeContext.Provider (Wrap components with a provider)
// SomeContext.Consumer (Consume the context)

// Header (logo, icons (add to card numbers), etc)

// sidebar movie list (movie card, => image, rating, onClick(add to card), onClick (details) ,  )

// app => header , main (app, sidebar, movie list) footer
