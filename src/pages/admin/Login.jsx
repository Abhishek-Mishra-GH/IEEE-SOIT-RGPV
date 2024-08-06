import { useEffect, useState } from 'react';
import axios from "axios";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() =>{
    const token = localStorage.getItem("token");
    if(token) {
      setLoggedIn(true);
    }
  } ,[])

  const handleLogin = () => {
    axios.post("https://ieee.abhishekcodes.tech/api/auth/login", {
      username: username,
      password: password
    }).then((resp) => {
      localStorage.setItem("token", resp.data.token);
      setLoggedIn(true);
    }).catch((err) => {
      setError(err.response.data.message);
    })
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form className="border-2 border-primary-background flex flex-col w-sm sm:w-[400px] py-4 px-6 rounded-lg shadow-xl">
        <input
          required
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          className="px-1 py-2 my-4 outline-none border-b-2 focus:border-gray-500"
        />
        <div className="w-full relative">
          <input
            required
            type={showPassword ? "text" : "password"}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="px-1 py-2 my-4 outline-none w-full border-b-2 focus:border-gray-500"
          />
        <button
          type="button"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        </div>
        {/* error */}
        {error && <div className="text-red-400 px-1">{error}</div>}
        <button type="submit" className="bg-primary-background hover:text-primary-foreground text-white w-full py-2 mt-6 mb-2 rounded-lg" onClick={(e) => {
          e.preventDefault();
          handleLogin();
        }}>Login</button>
        
      </form>
    </div>
  )
}

export default Login;