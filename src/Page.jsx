import React, { useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import { ThemeContext } from "./context";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="flex justify-around">
          <SideBar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
