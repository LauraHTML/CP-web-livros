import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col justify-between bg-background pt-4 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
