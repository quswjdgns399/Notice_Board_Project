import { useState } from "react";

function TodoApp() {
  return (
    <div className="TodoApp">
      Todo App Management
      <LoginComponent />
      {/* <WelcomeComponent /> */}
    </div>
  );
}

export default TodoApp;

function LoginComponent() {
  const [username, setUsername] = useState("in28minutes");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

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
    } else {
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
    }
    console.log(username);
    console.log(password);
  }

  function SuccessMessageComponent() {
    if (showSuccessMessage) {
      return <div>Authenticated Successfully</div>;
    }
    return null;
  }

  function FailedMessageComponent() {
    if (showFailureMessage) {
      return <div>Authenticated Failed</div>;
    }
    return null;
  }

  return (
    <div className="Login">
      <SuccessMessageComponent />
      <FailedMessageComponent />
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
