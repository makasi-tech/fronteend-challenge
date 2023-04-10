import { useParams } from "react-router-dom";
import { githubInstance } from "@/api/config";
import useAxios from "@/hooks/useAxios";
import { Sidebar } from "@/components";

export const Profile = () => {
  const { username } = useParams();

  const [profile, loadingProfile] = useAxios({
    axiosInstance: githubInstance,
    method: "get",
    url: `${username}`,
  });

  if (loadingProfile) return <p>Loading...</p>;

  return <Sidebar profile={profile} />;
};
