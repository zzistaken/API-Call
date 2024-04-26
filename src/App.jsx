import "bulma/css/bulma.css";
import "./App.css";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./Api";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result.data.results);
  };

  return (
    <div className="App">
      <Hero />
      <SearchBar search={handleSubmit} />
      <ImageList imageArray={images} />
    </div>
  );
}

export default App;
