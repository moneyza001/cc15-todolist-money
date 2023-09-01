import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";
import { useState } from "react";

/*
  #1 Form Handle

  ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
  FN จะถูก browser เรียกใช้เมื่อไหร่ โดยส่ง parameter มา 1 ตัว event project
  โดย default ทุกปุ่มใน <form> จะทำหน้าที่ submit
  จะ๔ุกควบคุมโดย type ของปุ่ม
  type="submit"
  type="button"

*/
/*
props = {
  textSubmit : string
  setIsOpenForm : FN
}
*/
/*

FormValidation
*/

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taksInput, setTaskInput] = useState("");

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    if (taksInput.trim() === "") {
      console.log("Error");
      setIsError(true);
      return;
    }
    console.log("submit === create new Todo");
    /*
    create NewTodo
    1 ส่ง Request ไปหลังบ้านเพื่อ save ลง Database
    2 Update state for Rerender 
    */
    const newTodo = {
      id: props.data.length + 1,
      task: taksInput,
      status: false,
      due_date: "2023-01-09",
    };
    const newTodoLists = [newTodo, ...props.data];
    props.setTodo(newTodoLists);
    props.setIsOpenForm(false);
  };

  const handleCancle = function () {
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input
        className={styles.todo__form__input}
        onChange={handleChangeInput}
        value={taksInput}
        placeholder="Task Name"
      />
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancle}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
