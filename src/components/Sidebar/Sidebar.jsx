import { IoIosPeople } from "react-icons/io";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { GrLocation, GrLink } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar({ user }) {
  const [starred, setStarred] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${user.login}/starred`
        )
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
      <img src={user.avatar_url} alt={user.name} />
      <h1>{user.name}</h1>
      <h3>@{user.login}</h3>
      <p>{user.bio}</p>
      <section>
        <h4>
          <IoIosPeople /> {user.followers} followers
        </h4>
        <h4>
          <AiOutlineHeart /> {user.following} following
        </h4>
        <h4>
          <AiOutlineStar /> {starred? starred : 0} starred
        </h4>
      </section>
      <section>
        <h3>
          <FaRegBuilding /> {user.company} organization
        </h3>
        <h3>
          <GrLocation /> {user.location} location
        </h3>
        <h3>
          <GrLink /> {user.blog} www.mywebsite.com
        </h3>
        <h3>
          <SlSocialTwitter /> {user.twitter_username} @mytwitter
        </h3>
      </section>
      <button>Voltar</button>
    </>
  );
}
