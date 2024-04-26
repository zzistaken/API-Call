import { useState } from "react";

function SearchBar({ search }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(inputValue);
  };

  return (
    <div className="section">
      <div className="box">
        <form onSubmit={handleFormSubmit}>
          <label className="label" htmlFor="input">
            What are you looking for?
          </label>
          <div className="is-flex">
            <input
              onChange={handleChange}
              id="input"
              className="input"
              type="text"
              placeholder="Search..."
              value={inputValue}
            />
            <input
              className="button is-primary ml-2"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
