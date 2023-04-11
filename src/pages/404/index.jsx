import S from "./error.module.css";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className={S.main}>
      <h1>ERROR 404</h1>
      <p>The page you requested was not found!</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </main>
  );
};
