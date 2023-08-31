import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";
/*
#1 -Condition Redering
-Default : Show Button & Text
-Active : Show TodoForm

concept : true ? <AddTask/> : <TodoForm/>
*/

/*
#2 Event handling
เอาฟังก์ชั่นไปผูกติด UI เพื่อให้ user เลือกใช้เอง
*/

/*
#3 JS Value ไม่สามารถทำให้ React re-render ได้
ต้องใช้ State
*/

/*
#4 React State : React Hook
const [state,setState] = useState(innitialState : any)
*/

function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Add Task" />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
