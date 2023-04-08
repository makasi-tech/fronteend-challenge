import { AiOutlineStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";

export default function CardRepository({ repository }) {
  return (
    <>
      <h1>{repository.name}</h1>
      <p>{repository.description}</p>
      <section>
        <h4>
          <AiOutlineStar /> {repository.stargazers_count} stars
        </h4>
        <h4> <RxDotFilled /> </h4>
      </section>
    </>
  );
}
