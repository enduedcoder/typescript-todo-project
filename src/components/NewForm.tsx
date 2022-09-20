import { FormEvent, useRef } from "react";

const NewForm: React.FC<{ addNewdata: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredInput = todoTextInputRef.current!.value;

    if (enteredInput?.trim().length === 0) {
      //throw error
      return;
    }
    props.addNewdata(enteredInput);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Enter Text</label>
      <input type="text" ref={todoTextInputRef} />
      <button type="submit">Add to-do</button>
    </form>
  );
};

export default NewForm;
