import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardRepository from "../../components/CardRepository/CardRepository";
import { SyncLoader } from "react-spinners";
import { ProfilePageStyled } from "./styled";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [repositoriesFiltered, setRepositoriesFiltered] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

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
          `https://api.github.com/users/${params.username}/repos?sort=updated&direction=desc&per_page=100`
        );
        const sortedRepositories = response.data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepositories(sortedRepositories);
        setRepositoriesFiltered(sortedRepositories);
        setIsSorted(true);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchRepositories();
  }, []);

  return (
    <>
      <ProfilePageStyled>
        <aside>
          {userDetails ? (
            <>
              <Sidebar user={userDetails} />
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </aside>
        {isLoading ? (
          <div className="loading">
            <SyncLoader size={40} color={"#24292e"} />
          </div>
        ) : (
          <section className="container-repositories">
            {isSorted &&
              repositoriesFiltered?.map((repository) => {
                return <CardRepository repository={repository} />;
              })}
          </section>
        )}
      </ProfilePageStyled>
    </>
  );
}
