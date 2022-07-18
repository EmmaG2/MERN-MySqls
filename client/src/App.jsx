import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/tasksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
    </Routes>
  );
}

export default App;
