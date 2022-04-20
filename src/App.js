import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { CreateUser } from "./components/CreateUser";
import { ListUser } from "./components/ListUser";

function App() {
  return (
    <div className="App">
      <h5>Hello FullStackApp(React + PHP + MySQL)</h5>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Users</Link>
            </li>
            <li>
              <Link to="user/create">Create Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
