import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from './pages/feed'

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route element={<Home />}  path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<Feed />} path="/feed" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
