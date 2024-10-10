import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/welcome" element={<WelcomeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default TodoApp;

function LoginComponent() {
  const [username, setUsername] = useState("in28minutes");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    // console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    // console.log(event.target.value);
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (username === "in28minutes" && password === "dummy") {
      console.log("Successful");
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      navigate("/welcome");
    } else {
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
    }
    console.log(username);
    console.log(password);
  }

  return (
    <div className="Login">
      {showSuccessMessage && (
        <div className="successMessage">Authenticated Successfully</div>
      )}
      {showFailureMessage && (
        <div className="failedMessage">Authenticated Failed</div>
      )}

      <div className="LoginForm">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  return <div className="welcome">Welcome Component</div>;
}
