import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardRepository from "../../components/CardRepository/CardRepository";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [repositories, setRepositories] = useState([]);

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

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.github.com/users/${params.username}/repos?sort=created&direction=desc`
        );
        setRepositories(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchRepositories();
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
      {repositories?.map((repository) => {
        return <CardRepository repository={repository}/>
      }
      )}
    </>
  );
}
