import { card, wrapper } from "./Sonner.css";

export const Sonner = () => {
  const teste = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className={wrapper}>
      {teste.map((item, index) => (
        <div
          className={card}
          key={item}
          style={{ "--index": teste.length - 1 - index } as React.CSSProperties}
        >
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
};
