import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../../routes/coordinator";
import { BsSearch } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { HomePageStyled } from "./styled";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <HomePageStyled>
        <h1>Search Devs</h1>
        <section>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type the username here..."
          />
          <button onClick={handleSearchUser}>
            {isLoading ? (
              <BeatLoader size={10} color={"#fff"} />
            ) : (
              <>
                <BsSearch />
                Buscar
              </>
            )}
          </button>
          {userData && goToProfilePage(navigate, userData.login)}
        </section>
      </HomePageStyled>
    </>
  );
}
