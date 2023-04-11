# Frontend Challenge from Makasí

O desafio tem como objetivo a criação de uma aplicação em ReactJS que tem como função buscar o perfil de usuários GitHub através de um nome de usuário.

Para a aplicação foi utilizado a **API do Github** que dá acesso as informações de cada usuário existente dentro da plataforma, como nome, usuário, sites, localização e também seus repositórios públicos.

A aplicação foi então feito com um **design moderno** e uma interface simplificada visando o **melhor conforto** do usuário e uma melhor performace na busca por usuários da plataforma **GitHub**

## Tecnologias utilizadas

**_JavaScript | Typescript | React | React-hook-form | React-icons | React-router-dom | react-toastify | Yup | Vite | Styled-Components | Vercel | Yarn | Node.js_**

### Motivação para escolha das tecnologias

A escolha dessas tecnologias se deu por conta da preocupação com a _segurança_ da aplicação e _experiência_ do usuário.

O **Typescript** foi utilizado para uma melhor performace do desenvolvedor durante a criação e manutenção do código.

O **React-router** foi utilizado para fazer a melhor gerenciação entre rotas.

O **Toastify** e **Yup** foram adicionados para que o usuário não faça uma pesquisa com um input vazio e que seja avisado quando o usuário não existir ou se der erro durante sua requisição.

O **Axios** foi escolhido pois ele fornece uma camada de simplificação para requisições e tratamento de erros.

O **Styled Components** permite a criação de padrões para os estilos que facilita a organização e manutenção do código, sendo preciso apenas mudar o valor das variáveis de estilo.

## Funcionalidade

### Página Home

Para a página inicial da aplicação temos um campo input de titúlo **Search Devs** onde deve ser colocado um nome de usuário existente.

Caso o input esteja vazio o usuário é avisado através de um pequeno texto abaixo do input.

Caso ele digite um usuário não existente ele será avisado do erro atravez de um modal no cando inferior direito da tela.

E caso o processo seja feito corretamente o usuário será avisado do sucesso através de um modal no canto inferior direito e do redirecionamento para a página de perfil.

### Página Profile

Na página do perfil, existem duas áreas. A primeira se encontra as informações do usuário github pesquisado, como foto de perfil, nome, nome de usuário, biografia, localidade, twitter, site pessoal, seguidores e também um botão de voltar.

A segunda área se encontra uma lista de repositórios ordenada por quantidade de estrelas, com as informações do repositório como, o nome que também é o link para a página daquele repositório, a descrição, numero de estrelas, data da ultima atualização.

## Executando o projeto

Clone esse repositório em seu computador:

```bash
git clone git@github.com:agnes-lica/fronteend-challenge.git
```

Vá até a pasta do projeto pelo terminal:

```bash
cd fronteend-challenge
```

Instale as dependências do projeto:

```bash
yarn
```

Inicie o servidor:

```bash
yarn dev
```

## Estrutura do projeto

- **src/**: Aqui ficam todos os arquivos da aplicação
  - **src/components**: Nessa pasta ficam todos os componentes utilizados no projeto;
    - **src/components/NavBar**: Aqui ficam os componentes da barra de navegação;
    - **src/components/Repository**: Aqui ficam os componentes de card dos repositórios.
  - **src/context**: Nessa pasta fica todos os arquivos de contexto da aplicação;
    - **src/context/User**: aqui fica os arquivos de contexto apenas para requisição sobre o usuário e repositórios do usuário do gituhub.
  - **src/pages**: Nessa pasta ficam os arquivos das páginas do projeto;
    - **src/home**: Aqui ficam os arquivos da página inicial;
    - **src/profile**: Aqui ficam os arquivos da página de perfil.
  - **src/routes**: Aqui ficam os arquivos que fazem as manutenções das rotas do projeto;
  - **src/services**: Aqui ficam os arquivos que definem a url para requisições da API;
  - **src/styles**: Nessa pasta se concentra todos os padrões de estilos globais da aplicação;
  - **src/utils**: Aqui ficam arquivos para códigos uteis, como o de organização por estrelas na parte dos repositórios e a verificação de input vazio do yup.

## Link do deploy

- [Frontend Challenge](https://fronteend-challenge-agnes-lica.vercel.app/)

## Links da API e Documentação

- API de busca de usuários do GitHub: https://api.github.com/users/username
- API de busca de repositórios do usuário pesquisado: https://api.-github.com/users/username/repos
- Documentação oficial do GitHub: https://docs.github.com/en/rest

## Contato

Para entrar em contato comigo me mande um e-mail ou uma mensagem nas redes sociais:

- LinkedIn: https://www.linkedin.com/in/agnesmr/
- E-mail: agnes.lica@gmail.com
