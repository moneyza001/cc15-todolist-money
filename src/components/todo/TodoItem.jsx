import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";

function TodoItem({ task, done, date, id, deleteTodo, editTodo }) {
  //   const {task,done,date} = props
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };

  const toggleStatus = () => {
    const newTodoObj = { id, task, date, status: !done, editTodo };

    editTodo(id, newTodoObj);
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit="Edit Task"
          setIsOpenForm={setIsOpenForm}
          editTodo={editTodo}
          oldTodo={{ id, task, date, done }}
        />
      ) : (
        <li className={styles.todo}>
          <div
            className={`${styles.todo__checkbox}  ${
              done ? styles.todo__checkbox__done : ""
            }`}
          >
            <HiOutlineCheck
              className={styles.todo__checkbox__icon}
              onClick={toggleStatus}
            />
          </div>
          <p
            className={`${styles.todo__task} ${
              done ? styles.todo__task__done : ""
            }`}
          >
            {task}
          </p>
          <span className={styles.todo__date}>{date}</span>
          <div className={styles.todo__action}>
            <span onClick={handleClick}>
              <FaPen className={styles.todo__edit} />
            </span>
            <span>
              <FaTrashAlt
                className={styles.todo__delete}
                onClick={() => deleteTodo(id)}
              />
            </span>
          </div>
        </li>
      )}
    </>
  );
}

export default TodoItem;
