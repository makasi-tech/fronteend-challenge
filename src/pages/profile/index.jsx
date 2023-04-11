import useAxios from "@/hooks/useAxios";
import { useParams } from "react-router-dom";
import { githubInstance } from "@/api/config";
import { Sidebar, Repository } from "@/components";
import S from "./profile.module.css";

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

  let countStars = 0;
  repositories.map((item) => (countStars += item.stargazers_count));

  const repoFilter = repositories.sort(
    (a, b) => b.stargazers_count - a.stargazers_count,
  );

  function renderRepo() {
    if (repositories.length === 0) {
      return <p>{username} doesn’t have any public repositories yet.</p>;
    } else {
      return repoFilter.map((repo) => {
        return <Repository repo={repo} key={repo.id} />;
      });
    }
  }

  return (
    <main className={S.main}>
      <Sidebar profile={profile} stars={countStars} />
      <section className={S.content}>{renderRepo()}</section>
    </main>
  );
};
