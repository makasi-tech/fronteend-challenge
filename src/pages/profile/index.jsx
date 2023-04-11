import useAxios from "@/hooks/useAxios";
import { useParams } from "react-router-dom";
import { githubInstance } from "@/api/config";
import { Sidebar, Repository, Loading, Skeleton } from "@/components";
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

  if (loadingProfile) return <Loading />;

  let countStars = 0;
  repositories.map((item) => (countStars += item.stargazers_count));

  const repoFilter = repositories.sort(
    (a, b) => b.stargazers_count - a.stargazers_count,
  );

  function renderRepo() {
    if (loadingRepo) {
      return [...Array(10).keys()].map((i) => <Skeleton key={i} />);
    }
    if (repositories.length === 0) {
      return (
        <p className={`${S.placeholder} fs-xs`}>
          <strong className="fw-bold">{username}</strong> doesn’t have any
          public repositories yet.
        </p>
      );
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
