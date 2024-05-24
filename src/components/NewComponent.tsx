type CurrentMoneyPropsType = {
  id: number;
  banknots: string;
  value: number;
  number: string;
};

export type FilterType = "all" | "RUBLS" | "Dollars";

type PropsType = {
  currentMoney: Array<CurrentMoneyPropsType>;
  callback: (nameBtn: FilterType) => void;
};

export const NewComponent = ({ currentMoney, callback }: PropsType) => {
  
  return (
    <>
      <ul>
        {currentMoney.map((money: CurrentMoneyPropsType) => {
          return (
            <li key={money.id}>
              <span>{money.banknots}</span>
              <span>{money.number}</span>
              <span>{money.value}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => callback("all")}>All</button>
      <button onClick={() => callback("RUBLS")}>Rubles</button>
      <button onClick={() => callback("Dollars")}>Dollars</button>
    </>
  );
};
