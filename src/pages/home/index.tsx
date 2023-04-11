//React imports
import { useContext } from "react";
import { useForm } from "react-hook-form";

//Contex imports
import { UserContext } from "../../context/User/gitUserContext";

//Yup imports
import { yupResolver } from "@hookform/resolvers/yup";

//Style imports
import { Form } from "./style";
import { Label } from "../../styles/Label";
import { Input } from "@/styles/Input";
import { Button } from "@/styles/Buttons";
import { Text } from "@/styles/Text";
import { SearchContainer } from "@/styles/Global";

//Utils imports
import { usernameSearchValidator } from "@/utils/yupResolver";

interface IUsernameSearch {
  username: string;
}

export const Home = (): JSX.Element => {
  const { handleSearch } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUsernameSearch>({
    resolver: yupResolver(usernameSearchValidator),
  });

  return (
    <main>
      <Form onSubmit={handleSubmit(handleSearch)}>
        <Label type="labelSearch" htmlFor="username">
          Search Dev
        </Label>
        <SearchContainer>
          <Input
            type="search"
            id="username"
            placeholder="Digite aqui um usuário github"
            {...register("username")}
          />

          <Button className="buttonSearch" type="btSearch">
            Pesquisar
          </Button>
        </SearchContainer>
        <Text type="error" color="error">
          {errors.username?.message}
        </Text>
      </Form>
    </main>
  );
};
