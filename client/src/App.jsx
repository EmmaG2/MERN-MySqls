import { Routes, Route } from "react-router-dom";
import TasksPage from "./pages/tasksPage";
import TaskForm from "./pages/taksForm";
import NotFound from "./pages/notFound";
import { Fragment } from "react";

import Navbar from "./components/navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
