/* import { ChangeEvent, useState } from "react";

type FullInputPropsType = {
  addNewMessage: (title: string) => void;
};

export const FullInput = ({ addNewMessage }: FullInputPropsType) => {
  let [title, setTitle] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const onClickButtonHandler = () => {
    addNewMessage(title);
    setTitle("");
  };

  return (
    <div>
      <input value={title} onChange={onChangeInputHandler} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
}; */
