import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMedia } from "@/hooks/useMedia";
import S from "./form.module.css";
import { RxMagnifyingGlass } from "react-icons/rx";

export const SearchForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState([]);
  const mobile = useMedia("(max-width: 480px)");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`profile/${username}`);
  };

  const handleSearch = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form className={S.form} onSubmit={handleSubmit}>
      <label className="fs-lg" htmlFor="search">
        <strong className="fw-bold ">Search</strong> Devs
      </label>
      <div className={`${S.input_group}`}>
        <input
          className={`${S.input}`}
          type="text"
          id="search"
          onChange={handleSearch}
          placeholder="Type the username here..."
        />
        <button className={`${S.button_submit}`} type="submit">
          <RxMagnifyingGlass />
          {!mobile && "Search" }
        </button>
      </div>
    </form>
  );
};
