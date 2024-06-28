import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashbord/Dashboard";
import ListTache from "./Pages/My task/ListTache";
import Login from "./Pages/Sign/Login";
import Register from "./Pages/Sign/Register";
import TaskDetail from "./Pages/TaskDetail/TaskDetail";
import Setting from "./Pages/params/Setting";
import ForgetPass from "./Pages/Sign/ForgetPass";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task" element={<ListTache />} />
            <Route path="/task/:id" element={<TaskDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetPass" element={<ForgetPass />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Router>
      </div>

      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
