import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

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
          <Sidebar user={userDetails}/>
          <h1>Profile Page</h1>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}
