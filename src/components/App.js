import React from "react";
import "./App.scss";

// Importing the components
import Header from "./Header";
import AddButton from "./AddButton";
import ListContainer from "./ListContainer";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__flex">
          <header className="header">
            <Header />
          </header>
          <section className="middle">
            <AddButton />
            <ListContainer />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
