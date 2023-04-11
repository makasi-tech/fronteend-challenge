import P from "prop-types";
import S from "./repository.module.css";
import { RxStar } from "react-icons/rx";
import { useMedia } from "@/hooks/useMedia";
import { Link } from "react-router-dom";

export const Repository = ({ repo }) => {
  const { name, description, stargazers_count, updated_at, html_url } = repo;

  function timeAgo(date) {
    const givenDate = new Date(date);
    const diff = Date.now() - givenDate.getTime();
    const units = [
      { label: "year", divisor: 31536000000 },
      { label: "month", divisor: 2592000000 },
      { label: "day", divisor: 86400000 },
      { label: "hour", divisor: 3600000 },
      { label: "minute", divisor: 60000 },
      { label: "second", divisor: 1000 },
    ];
    const { label, divisor } =
      units.find(({ divisor }) => diff >= divisor) || units[units.length - 1];
    const value = Math.floor(diff / divisor);
    return `${value} ${label}${value > 1 ? "s" : ""}`;
  }

  const mobile = useMedia("(max-width: 20em)");
  return (
      <ul className={S.repository} role="list">
        <li>
          <Link
            className={`${S.link} fw-bold fs-md`}
            to={html_url}
            target="_blank"
          >
            {name}
          </Link>
        </li>
        <p>{description}</p>
        <ul className={`${S.info} ${mobile ? "fs-xs" : "fs-sm"}`} role="list">
          <li>
            <RxStar />
            {stargazers_count} stars
          </li>
          <li>● Updated {timeAgo(updated_at.substring(0, 10))} ago</li>
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
