import { useState } from "react";
import "./App.css";

const users = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" }
];

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const valid = users.some(u => u.username === username && u.password === password);
    window.location.href = valid 
      ? "https://satyakisneha.base44.app/" 
      : "https://innovationclubvotingwebsite.netlify.app/";
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Innovation Club Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">Invalid credentials</p>}
      </form>
      <div className="animated-lines">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  );
}