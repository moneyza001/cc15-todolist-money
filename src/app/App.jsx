import "./App.scss";
import {
  FaCalendar,
  FaCalendarAlt,
  FaInbox,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header.jsx";
import ListItem from "../components/ListItem";
import Lists from "../components/Lists";
function App() {
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];
  const projectList = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];
  return (
    <div>
      <div className="todo">
        <div className="todo__header">
          <Header />
        </div>
        <div className="todo__sidebar">
          <aside className="sidebar">
            <section className="sidebar__category">
              <Lists data={generalLists} />
            </section>
            <section className="sidebar__category">
              <div className="accordion">
                <div>
                  <li className="accordion__item">
                    <FaChevronDown
                      className="accordion__item__icon
                      accordion__item__active"
                    />
                    <p className="accordion__item__text">Project</p>
                  </li>
                </div>
                <Lists data={projectList} />
              </div>
            </section>
          </aside>
        </div>
        <div className="todo__content">TodoContent</div>
      </div>
    </div>
  );
}

export default App;
