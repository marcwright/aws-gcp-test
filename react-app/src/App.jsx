import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import env from "react-dotenv";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  console.log('import.meta.env', import.meta.env, 'window.location.href', window.location.href)
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    // const data = await fetch(`${'http://localhost:8080/api/users' ?? 'https://ikea-08202024-itbyql34oa-ew.a.run.app/api/users'}`);
    const gcpUrl = import.meta.env.PROD ? window.location.href : 'http://localhost:8080/';
    const data = await fetch(`${gcpUrl}api/users`);
    const response = await data.json();
    console.log("response", response);
    setUsers(response);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + IKEA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
