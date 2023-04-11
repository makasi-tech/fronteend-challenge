import { Link, useNavigate } from "react-router-dom";
import { useMedia } from "@/hooks/useMedia";
import {
  RxPerson,
  RxHeart,
  RxStar,
  RxSewingPin,
  RxEnvelopeClosed,
  RxTwitterLogo,
  RxLink2,
} from "react-icons/rx";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import P from "prop-types";
import S from "./sidebar.module.css";
export const Sidebar = ({ profile, stars }) => {
  const {
    avatar_url,
    name,
    bio,
    login,
    followers,
    following,
    company,
    location,
    email,
    twitter_username,
    blog,
  } = profile;

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };

  const mobile = useMedia("(max-width: 20em)");

  return (
    <aside className={S.sidebar}>
      <div className={S.content}>
        <img src={avatar_url} alt={`${login} user avatar`} />
        <h2 className="fw-regular">{name}</h2>
        <h2 className="fs-md fw-medium">@{login}</h2>
        <p>{bio}</p>
        <ul
          className={`${S.statistics} fw-regular ${mobile ? "fs-xs" : "fs-sm"}`}
          role="list">
          <li className={`${S.icon}`}>
            <RxPerson />
            {followers} <strong className="fw-bold">followers</strong>
          </li>
          <li className={`${S.icon}`}>
            <RxHeart />
            {following} <strong className="fw-bold">followers</strong>
          </li>
          <li className={`${S.icon}`}>
            <RxStar />
            {stars} <strong className="fw-bold">stars</strong>
          </li>
        </ul>
        <ul className={`${mobile ? "fs-xs" : "fs-sm"} fw-regular`} role="list">
          <li className={`${S.icon}`}>
            {company && <HiOutlineBuildingOffice />}
            {company}
          </li>
          <li className={`${S.icon}`}>
            {location && <RxSewingPin />}
            {location}
          </li>
          <li className={`${S.icon}`}>
            {blog && (
              <Link className={S.link} to={blog} target="_blank">
                <RxLink2 /> {blog.replace(/^https?:\/\//, "")}
              </Link>
            )}
          </li>
          <li className={`${S.icon}`}>
            {twitter_username && (
              <Link
                className={S.link}
                to={`https://twitter.com/${twitter_username}`}
                target="_blank"
              >
                <RxTwitterLogo /> @{twitter_username}
              </Link>
            )}
          </li>
          <li className={`${S.icon}`}>
            {email && <RxEnvelopeClosed />}
            {email}
          </li>
        </ul>
      </div>
      <button className={S.button} onClick={navigation}>
        Go Back
      </button>
    </aside>
  );
};

Sidebar.propTypes = {
  profile: P.shape({
    avatar_url: P.string,
    name: P.string,
    bio: P.string,
    login: P.string,
    followers: P.number,
    following: P.number,
    company: P.string,
    location: P.string,
    email: P.string,
    twitter_username: P.string,
    blog: P.string,
  }),
  stars: P.number,
};
