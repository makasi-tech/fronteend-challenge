import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`profile/${username}`);
  };

  const handleSearch = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="search">Github Search</label>
      <input
        className="input"
        type="text"
        id="search"
        onChange={handleSearch}
        placeholder="Type the username here..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
