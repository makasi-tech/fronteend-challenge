import S from "./skeleton.module.css";
export const Skeleton = () => {
  return (
    <div className={S.loader}>
      <div className={S.wrapper}>
            <div className={S.line_1}></div>
        <div className={S.line_2}></div>
        <div className={S.line_3}></div>
      </div>
    </div>
  );
};
