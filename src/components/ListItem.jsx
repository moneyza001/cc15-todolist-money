import "./ListItem.scss";
import { FaCalendar, FaCalendarAlt, FaHome, FaInbox } from "react-icons/fa";

function ListItem(props) {
  return (
    <li className={`list__item ${props.active ? "active" : ""}`}>
      {props.icon}
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}

export default ListItem;
