import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

// createContext(defaultValue) return object
// SomeContext.Provider (Wrap components with a provider)
// SomeContext.Consumer (Consume the context)

// Header (logo, icons (add to card numbers), etc)

// sidebar movie list (movie card, => image, rating, onClick(add to card), onClick (details) ,  )

// app => header , main (app, sidebar, movie list) footer
