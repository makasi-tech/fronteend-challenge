import { useParams } from "react-router-dom";
import { githubInstance } from "@/api/config";
import useAxios from "@/hooks/useAxios";
import { Sidebar, Repository } from "@/components";

export const Profile = () => {
  const { username } = useParams();

  const [profile, loadingProfile] = useAxios({
    axiosInstance: githubInstance,
    method: "get",
    url: `${username}`,
  });

  const [repositories, loadingRepo] = useAxios({
    axiosInstance: githubInstance,
    method: "get",
    url: `${username}/repos`,
  });

  if (loadingProfile && loadingRepo) return <p>Loading...</p>;

  function renderRepo() {
    if (repositories.length === 0) {
      return <p>{username} doesn’t have any public repositories yet.</p>;
    } else {
      return repositories.map((repo) => {
        return <Repository repo={repo} key={repo.id} />;
      });
    }
  }

  return (
    <>
      <Sidebar profile={profile} />
      <section>{renderRepo()}</section>
    </>
  );
};
