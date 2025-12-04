import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactsApp from "./Components/ContactsApp";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsApp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
