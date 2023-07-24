import "./App.css";
import NotFoundPage from "../NotFound/NotFoundPage";
import Header from "../Header/header";
import Home from "../../home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
