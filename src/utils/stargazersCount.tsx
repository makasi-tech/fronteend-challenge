interface IStarCount {
  stargazersCount: number;
}

export const starCount = (atualRepo: IStarCount, nextRepo: IStarCount) =>
  nextRepo.stargazersCount - atualRepo.stargazersCount;
