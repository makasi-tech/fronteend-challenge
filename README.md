# Makasí Frontend Challenge

Repositório do desafio técnico da *Makasí*.
O projeto utiliza a **API do GitHub** de **[Usuários](https://api.github.com/users/ellenmariadev)** e **[Respositórios](https://api.github.com/users/ellenmariadev/repos)** para buscar um usuário e exibir seus dados em uma página de perfil.


> Acesse o **[Layout](https://www.figma.com/file/FJgXuQheaJ0Xpm6tI9nCyM/Makasi-Frontend?node-id=2%3A10&t=flUknaRzisuu6Art-1)** 🎨\
> Saiba mais sobre os requisitos **[aqui](https://github.com/makasi-tech/fronteend-challenge/blob/main/README.md)**.



<details>
<summary>  
  <kbd> <br> Estrutura do Diretório <br>  </kbd> 
</summary>
<br>

```
src/
├─ api/ ——————————————————⇢ (Configuração da API com Axios)
│  └─ config.js
├─ components/ ———————————⇢ (Componente + Arquivo CSS)
│  ├─ form
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  ├─ loading
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  ├─ respository
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  ├─ sidebar
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  ├─ skeleton
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  └─ index.js
├─ hooks/ 
│  ├─ useAxios.js —————————⇢ (Hook para requisições de API)
│  └─ useMedia.js —————————⇢ (Hook para media query[max-width])
├─ pages/
│  ├─ 404 —————————————————⇢ (Página + Arquivo CSS)
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  ├─ home
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  ├─ profile
│  │  ├─ index.jsx
│  │  └─ style.module.css
│  └─ index.js
├─ routes/ ——————————————⇢ (Configuração das rotas da aplicação)
│  └─ root.jsx
├─ styles/ ——————————————⇢ (Estilizações Globais)
│  ├─ global.css
│  └─ reset.css
└─ main.jsx
```
  
</details>

 ### ○ Tecnologias
 
A aplicação foi desenvolvida utilizando a biblioteca `React` em conjunto com o bundler `Vite`, visando obter maior praticidade no processo de desenvolvimento. Quanto à estilização da aplicação, optou-se pela utilização do `CSS Modules`, por se tratar de um projeto pequeno, sem necessidade de frameworks externos. Além disso, o CSS Modules permite uma organização mais agradável e intuitiva na escrita do código CSS. 



  <kbd> <br> React <br>  </kbd> ⇢
  <kbd> <br> Axios <br> </kbd> ⇢
  <kbd> <br> ESLint <br> </kbd> ⇢
  <kbd> <br> Prettier <br> </kbd>  ⇢
  <kbd> <br> Vite <br> </kbd> ⇢
  <kbd> <br> CSS Modules <br> </kbd>
  

 ### ○ Deploy 
 [![Netlify Status](https://api.netlify.com/api/v1/badges/9a3f54e8-c589-4c9b-aa0f-b15e92cbd67c/deploy-status)](https://github-profile-makasi.netlify.app)\
 Acesse o site **[aqui](https://github-profile-makasi.netlify.app)**.
 
 
 | Rota | Descrição |
 | ----- | ----------- |
 | <kbd>   / </kbd> |<samp>Home</samp>|
 | <kbd> /profile/username </kbd>  |<samp>Profile</samp>|


### 🎲 Iniciando o Projeto 

```bash
# Clone o repositório
$ git clone <https://github.com/ellenmariadev/github-profile.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd github-profile

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev

# Pronto para acessar 🎉
$ <http://localhost:5173>
```
