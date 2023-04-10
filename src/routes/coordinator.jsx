export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToProfilePage = (navigate, username) => {
  navigate(`/perfil/${username}`);
};