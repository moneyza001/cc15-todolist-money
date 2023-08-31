import styles from "./TodoLists.module.scss";
import { FaTrashAlt, FaPen, FaRegCircle } from "react-icons/fa";

function TodoLists() {
  return (
    <ul>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}>{/* <FaRegCircle /> */}</span>
        <p className={styles.todo__task}>Todo-Task 1</p>
        <span className={styles.todo__date}>30 AUG 2023</span>
        <div className={styles.todo__action}>
          <span className={styles.todo__edit}>
            <FaPen />
          </span>
          <span className={styles.todo__delete}>
            <FaTrashAlt />
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoLists;
