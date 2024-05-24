import { useState } from "react";
import "./App.css";
import { FilterType, NewComponent } from "./components/NewComponent";

function App() {
  const [money] = useState([
    { id: 1, banknots: "Dollars", value: 100, number: " a1234567890" },
    { id: 2, banknots: "Dollars", value: 50, number: " z1234567890" },
    { id: 3, banknots: "RUBLS", value: 100, number: " w1234567890" },
    { id: 4, banknots: "Dollars", value: 100, number: " e1234567890" },
    { id: 5, banknots: "Dollars", value: 50, number: " c1234567890" },
    { id: 6, banknots: "RUBLS", value: 100, number: " r1234567890" },
    { id: 7, banknots: "Dollars", value: 50, number: " x1234567890" },
    { id: 8, banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState("all");

  let currentMoney = money;
  if (filter === "RUBLS")
    currentMoney = money.filter((item) => item.banknots === "RUBLS");
  if (filter === "Dollars")
    currentMoney = money.filter((item) => item.banknots === "Dollars");

  const onClickFilterHandler = (nameBtn: FilterType) => {
    setFilter(nameBtn);
  };

  return (
    <>
      <NewComponent
        currentMoney={currentMoney}
        callback={onClickFilterHandler}
      />
    </>
  );
}

export default App;
