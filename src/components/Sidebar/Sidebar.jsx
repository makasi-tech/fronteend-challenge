import { IoIosPeople } from "react-icons/io";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { GrLocation, GrLink } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { SidebarStyled } from "./styled";

export default function Sidebar({ user }) {
  const [starred, setStarred] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
            <h3>@{user.login}</h3>
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
            <h3>
              <FaRegBuilding /> {user.company} organization
            </h3>
            <h3>
              <GrLocation /> {user.location}
            </h3>
            <h3>
              <GrLink /> {user.blog}
            </h3>
            <h3>
              <SlSocialTwitter /> @{user.twitter_username}
            </h3>
          </section>
          <button>Voltar</button>
        </section>
      </SidebarStyled>
    </>
  );
}
