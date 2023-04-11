//React imports
import { useContext } from "react";

// Style imports
import { BigIconSize, Container, Flex, IconSize } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { MainContainer, UserArea, Wrapper, WrapperColumns } from "./style";
import { Anchor } from "@/styles/Anchor";
import { LogoImage } from "./style";

// Component imports
import { Repository } from "@/components/Repository";

//Context import
import { UserContext } from "../../context/User/gitUserContext";

//Icon imports
import {
  BsFillHeartFill,
  BsBuilding,
  BsLink45Deg,
  BsTwitter,
} from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdPlace, MdEmail } from "react-icons/md";

export const Profile = (): JSX.Element => {
  const { gitUser } = useContext(UserContext);
  return (
    <main>
      <MainContainer id="projetos">
        <Container>
          <WrapperColumns>
            <UserArea>
              <LogoImage
                src={`${gitUser?.avatar}`}
                alt={gitUser?.username}
                title={gitUser?.username}
              />

              {gitUser?.name && (
                <Text as="p" type="h2">{`${gitUser?.name}`}</Text>
              )}
              {gitUser?.username && (
                <Text as="p" type="h4">
                  @{`${gitUser?.username}`}
                </Text>
              )}
              {gitUser?.bio && (
                <Text
                  as="p"
                  type="text1"
                  color="primary"
                >{`${gitUser?.bio}`}</Text>
              )}
              <Flex>
                <Text as="p" type="text2" color="LigthGrey3">
                  <IoIosPeople size={IconSize} />
                  {`${gitUser?.followers}`} followers
                </Text>
                <Text as="p" type="text2" color="LigthGrey3">
                  <BsFillHeartFill size={IconSize} />
                  {` ${gitUser?.following}`} following
                </Text>
              </Flex>
              {gitUser?.company && (
                <Text as="p" type="text1" color="primary">
                  <BsBuilding size={BigIconSize} />
                  {`${gitUser?.company}`}
                </Text>
              )}
              {gitUser?.location && (
                <Text as="p" type="text1" color="primary">
                  <MdPlace size={BigIconSize} />
                  {`${gitUser?.location}`}
                </Text>
              )}
              {gitUser?.email && (
                <Text as="p" type="text1" color="primary">
                  <MdEmail size={BigIconSize} />
                  {`${gitUser?.email}`}
                </Text>
              )}

              {gitUser?.webSite && (
                <Anchor
                  type="SocialMediaLinks"
                  target="_blank"
                  href={`${gitUser?.webSite}`}
                >
                  <BsLink45Deg /> Acessar website
                </Anchor>
              )}
              {gitUser?.twitter && (
                <Anchor
                  type="SocialMediaLinks"
                  target="_blank"
                  href={`https://twitter.com/${gitUser?.twitter}`}
                >
                  <BsTwitter />
                  Acessar Perfil no Twitter
                </Anchor>
              )}
              <Anchor type="BackLink" href={`/`}>
                Voltar
              </Anchor>
            </UserArea>
            <Wrapper>
              <Repository />
            </Wrapper>
          </WrapperColumns>
        </Container>
      </MainContainer>
    </main>
  );
};
