import P from "prop-types";
import S from "./repository.module.css";
import { RxStar } from "react-icons/rx";
import { useMedia } from "@/hooks/useMedia";
import { Link } from "react-router-dom";

export const Repository = ({ repo }) => {
  const { name, description, stargazers_count, updated_at, html_url } = repo;

  const updated = updated_at.substring(0, 10);
  const givenDate = new Date(updated);
  const days = Math.ceil((Date.now() - givenDate) / (1000 * 60 * 60 * 24));
  const timeAgo =
    days >= 30 ? `${Math.floor(days / 30)} months` : `${days} days`;

  const mobile = useMedia("(max-width: 320px)");
  return (
    <ul className={S.repository} role="list">
      <li>
        <Link className={`${S.link} fw-bold fs-md`} to={html_url} target="_blank">
          {name}
        </Link>
      </li>
      <p>{description}</p>
      <ul className={`${S.info} ${mobile ? "fs-xs" : "fs-sm"}`}>
        <li>
          <RxStar />
          {stargazers_count} stars
        </li>
        <li>● Updated {timeAgo} ago</li>
      </ul>
      <hr className={S.line} />
    </ul>
  );
};

Repository.propTypes = {
  repo: P.shape({
    name: P.string,
    description: P.string,
    stargazers_count: P.number,
    updated_at: P.string,
    html_url: P.string,
  }),
};
