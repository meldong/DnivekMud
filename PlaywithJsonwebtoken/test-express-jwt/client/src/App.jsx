import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {user === null ? (
        <div className="login">
          <form onSubmit={handleSubmit}>
            <span className="formTitle">DESIGN MANAGER</span>
            <input
              type="text"
              className="textbox"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="textbox"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              Login
            </button>
          </form>
        </div>
      ) : (
        <span>User has been logged in.</span>
      )}
    </div>
  );
}

export default App;
