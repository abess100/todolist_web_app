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
import { useEffect, useState } from "react";
import { UidContext } from "./Context/AppContext";
import axios from "axios";
import Profil from "./Pages/Profil/Profil";


function App() {
  const queryClient = new QueryClient();
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fecthToken = async () => {
      await  axios.get('http://localhost:1000/jwtid',
        {withCredentials: true}
      )
        .then((res) => {
          setUid(res.data.id)
          console.log(res.data);
        })
        .catch((err) => console.log('il y a une erreur')) 
    };
    fecthToken();
  },[uid])


  return (
    <UidContext.Provider value={uid}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/task" element={<ListTache />} />
              <Route path="/task/:id" element={<TaskDetail />} />
              <Route path="/login" element={ <Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetPass" element={<ForgetPass />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/profil" element={<Profil />} />
              <Route path="*" element={<Setting/>} />
            </Routes>
          </Router>
        </div>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </UidContext.Provider>
  );
}

export default App;
