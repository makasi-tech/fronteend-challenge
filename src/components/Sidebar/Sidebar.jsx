import { useEffect, useState } from "react";
import axios from "axios";
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineHeart, AiOutlineStar, AiOutlineMail } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { SlLink } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { SidebarStyled } from "./styled";

export default function Sidebar({ user }) {
  const [starred, setStarred] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user.login}/starred`
        );
        setStarred(response.data.length);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchFavorites();
  }, []);

  return (
    <>
      <SidebarStyled>
        <img src={user.avatar_url} alt={user.name} />
        <section className="container-info">
          <section>
            <h1>{user.name}</h1>
            <h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                @{user.login}
              </a>
            </h3>
          </section>
          <p>{user.bio}</p>
          <section className="container-icons">
            <h4>
              <IoIosPeople /> {user.followers} followers
            </h4>
            <h4>
              <AiOutlineHeart /> {user.following} following
            </h4>
            <h4>
              <AiOutlineStar /> {starred ? starred : 0} stars
            </h4>
          </section>
          <section className="container-social">
            {user.company && (
              <h3>
                <FaRegBuilding /> {user.company}
              </h3>
            )}
            {user.location && (
              <h3>
                <IoLocationOutline /> {user.location}
              </h3>
            )}
            {user.email && (
              <h3>
                <AiOutlineMail /> {user.email}
              </h3>
            )}
            {user.blog && (
              <h3>
                <a href={user.blog} target="_blank" rel="noopener noreferrer">
                  <SlLink /> {user.blog}
                </a>
              </h3>
            )}
            {user.twitter_username && (
              <h3>
                <a
                  href={`https://twitter.com/${user.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SlSocialTwitter /> @{user.twitter_username}
                </a>
              </h3>
            )}
          </section>
          <button type="button" onClick={() => goToHomePage(navigate)}>
            Voltar
          </button>
        </section>
      </SidebarStyled>
    </>
  );
}
