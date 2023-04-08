import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${params.username}`
        );
        setUserDetails(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <>
      {userDetails ? (
        <>
          <h1>Profile Page</h1>
          <h1>{userDetails.name}</h1>
          <img src={userDetails.avatar_url} alt={userDetails.name} />
          <p>{userDetails.bio}</p>
          <p>Followers: {userDetails.followers}</p>
          <p>Following: {userDetails.following}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}
