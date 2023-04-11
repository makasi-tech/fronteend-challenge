//React imports
import { useNavigate } from "react-router-dom";
import { createContext, ReactNode, useState } from "react";

//Axios imports
import { AxiosResponse } from "axios";

//Toastify imports
import { toast } from "react-toastify";

//API
import api from "../../services/api";

interface IHandleUser {
  id: number;
  avatar: string;
  bio: string;
  website: string;
  company: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  username: string;
  name: string;
  repos: string;
  twitter: string;
  webSite: string;
}

interface IUsernameSearch {
  username: string;
}

interface IRepo {
  id: number;
  name: string;
  description: string;
  updated_at: string;
  stargazers_count: number;
  url: string;
}

interface IGitUserProps {
  handleSearch: (data: IUsernameSearch) => void;
  handleRepoSearch: (data: IUsernameSearch) => void;
  gitUser: IHandleUser | null;
  setGitUser: (gitUser: IHandleUser | null) => void;
  userRepos: IRepo[] | null;
}

interface IProviderChildren {
  children: ReactNode;
}

export const UserContext = createContext<IGitUserProps>({} as IGitUserProps);
const UserProvider = ({ children }: IProviderChildren) => {
  const navigate = useNavigate();
  const [gitUser, setGitUser] = useState<IHandleUser | null>(null);
  const [userRepos, setUserRepos] = useState<IRepo[] | null>([]);

  const handleSearch = async (data: IUsernameSearch) => {
    await api
      .get(`/users/${data.username}`)
      .then((res: AxiosResponse) => {
        setGitUser({
          id: res.data.id,
          avatar: res.data.avatar_url,
          bio: res.data.bio,
          website: res.data.blog,
          company: res.data.company,
          email: res.data.email,
          followers: res.data.followers,
          following: res.data.following,
          location: res.data.location,
          username: res.data.login,
          name: res.data.name,
          repos: res.data.repos_url,
          twitter: res.data.twitter_username,
          webSite: res.data.blog,
        });
      })
      .then(() => handleRepoSearch(data))
      .then(() => {
        toast.success("Perfil encontrado!");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  const handleRepoSearch = async (data: IUsernameSearch) => {
    await api
      .get(`/users/${data.username}/repos`)
      .then((res: AxiosResponse) => {
        let repos: IRepo[] = [];
        res.data.map((repo: IRepo) =>
          repos.push({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            updated_at: repo.updated_at
              .slice(0, 9)
              .split("-")
              .reverse()
              .join("-"),
            stargazers_count: repo.stargazers_count,
            url: repo.url,
          })
        );
        setUserRepos(repos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        handleRepoSearch,
        handleSearch,
        gitUser,
        setGitUser,
        userRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
