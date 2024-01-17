import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPage from "./NewPage";
import ToDoList from "./ToDoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vite-test" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} />
        <Route path="to-do" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
