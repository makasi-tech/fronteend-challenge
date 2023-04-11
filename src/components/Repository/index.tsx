//React imports
import { useContext } from "react";

//Icons import
import { BsFillStarFill } from "react-icons/bs";

//Style import
import { PointsContainer, RepoCards } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Link } from "./style";

//Contex import
import { UserContext } from "../../context/User/gitUserContext";

//Utils import
import { starCount } from "../../utils/stargazersCount";

export const Repository = (): JSX.Element => {
  const { userRepos, gitUser } = useContext(UserContext);

  return (
    <>
      {userRepos?.sort(starCount).map((repo) => (
        <RepoCards key={`${repo.id}`}>
          <Link
            color="DarkLigthGrey"
            type="h4"
            target="_blank"
            href={`https://github.com/${gitUser?.username}/${repo.name}`}
          >
            {`${repo?.name}`}
          </Link>
          {repo.description && (
            <Text
              as="p"
              type="h4"
              color="DarkLigthGrey"
            >{`${repo?.description}`}</Text>
          )}
          <PointsContainer>
            <Text as="p" type="h4" color="DarkLigthGrey">
              <BsFillStarFill size={18} />
              {`${repo?.stargazersCount}`}
            </Text>
            <Text as="p" type="h4" color="DarkLigthGrey">
              •{`${repo?.updated_at}`}
            </Text>
          </PointsContainer>
        </RepoCards>
      ))}
    </>
  );
};
