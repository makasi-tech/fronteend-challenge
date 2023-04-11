interface IStarCount {
  stargazers_count: number;
}

export const starCount = (atualRepo: IStarCount, nextRepo: IStarCount) =>
  nextRepo.stargazers_count - atualRepo.stargazers_count;
