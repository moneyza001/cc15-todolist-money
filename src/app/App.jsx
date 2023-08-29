import "./App.scss";
import { FaHome } from "react-icons/fa";
import Header from "../components/Header.jsx";
function App() {
  return (
    <div>
      <div className="todo">
        <div className="todo__header">
          <Header />
        </div>
        <div className="todo__sidebar">SideBar</div>
        <div className="todo__content">TodoContent</div>
      </div>
    </div>
  );
}

export default App;
