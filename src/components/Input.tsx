import { ChangeEvent } from "react";

type InputPropsType = {
  value: string;
  title: string;
  setTitle: (title: string) => void;
};

export const Input = ({ title, setTitle }: InputPropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  return <input value={title} onChange={onChangeInputHandler} />;
};
