import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pesquisa from "./pages/Pesquisa";
import Lancamentos from "./pages/Lancamentos";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col justify-between bg-background pt-4 p-8">
        <Routes>
          <Route path="/pesquisa" element={<Pesquisa />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
