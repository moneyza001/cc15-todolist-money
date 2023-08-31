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

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [isCancle, setIsCancle] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    console.log("submit");
  };

  const handleCancle = function () {
    setIsCancle(!isCancle);
    console.log("cancle");
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      <input className={styles.todo__form__input} placeholder="Task Name" />
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
