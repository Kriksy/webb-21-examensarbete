import { Routes, Route } from "react-router-dom"
import "semantic-ui-css/semantic.min.css";
import './App.css';

import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App;
