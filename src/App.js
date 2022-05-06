import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login.js";
import Signup from "./components/Signup";
import AdminLogin from "./components/AdminLogin";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />

          {/* <Route path="/votes">
              <div className="admin-home">
                <Admin />
                <Votes />
              </div>
            </Route> */}

          {/* <Route path="/admin/home">
              <div className="admin-home">
                <Admin />
                <RegisterVoter />
              </div>
            </Route> */}

          {/* <Route path="/admin/phase">
              <div className="admin-home">
                <Admin />
                <Phase />
              </div>
            </Route> */}

          {/* <Route path="/admin/add">
              <div className="admin-home">
                <Admin />
                <AddCandidate />
              </div>
            </Route> */}

          {/* <Route path="/voting">
              <div className="voting-home">
                <Home />
                <Voting />
              </div>
            </Route> */}

          {/* <Route path="/results">
              <div className="voting-home">
                <Home />
                <Results />
              </div>
            </Route> */}

          {/* <Route path="/home">
              <div className="voting-home">
                <Home />
                <Registration />
              </div>
            </Route> */}
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
