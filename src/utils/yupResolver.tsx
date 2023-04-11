//Yup imports
import * as yup from "yup";

export const usernameSearchValidator = yup.object().shape({
  username: yup.string().required("O Username é obrigatório"),
});
