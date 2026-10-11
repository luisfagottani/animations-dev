import { ball, ballWrapper, wrapper } from "./SimpleTransform.css";

export const SimpleTransform = () => (
  <div className={wrapper}>
    <div className={ballWrapper}>
      <div className={ball} />
    </div>
  </div>
);
