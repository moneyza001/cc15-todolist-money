import "./App.scss";
import {FaCalendar, FaCalendarAlt, FaHome,FaInbox} from 'react-icons/fa';
import Header from "../components/Header.jsx";
import ListItem from "../components/ListItem";
function App() {
  return (
    <div>
      <div className="todo">
        <div className="todo__header">
          <Header />
        </div>
        <div className="todo__sidebar">
          <aside className="sidebar">
            <section className="sidebar__category">
              <ul className="list">
                  {/* <li className="list__item">
                      <FaInbox className="list__item__icon"/>
                    <p className="list__item__text">Inbox</p>
                  </li>
                  <li className="list__item">
                      <FaCalendar className="list__item__icon"/>
                    <p className="list__item__text">Today</p>
                  </li>
                  <li className="list__item">
                      <FaCalendarAlt className="list__item__icon"/>
                    <p className="list__item__text">Next 7 days</p>
                  </li> */}
                  <ListItem 
                  text='Inbox' 
                  icon={<FaInbox/>}
                  />
                  <ListItem 
                  text='Today' 
                  icon={<FaCalendar/>}
                  />
                  <ListItem 
                  text='Next 7 
                  days' icon={<FaCalendarAlt/>}
                  />
              </ul>
            </section>
            <section className="sidebar__category">2</section>
          </aside>
        </div>
        <div className="todo__content">TodoContent</div>
      </div>
    </div>
  );
}

export default App;
