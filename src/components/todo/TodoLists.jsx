import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";

function TodoLists(props) {
  return (
    <ul className={styles.todo__lists}>
      {props.data.map((todoObj) => (
        <TodoItem
          id={todoObj.id}
          key={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
