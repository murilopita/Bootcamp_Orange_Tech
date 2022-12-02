import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route element={<Home />}  path="/" exact />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
