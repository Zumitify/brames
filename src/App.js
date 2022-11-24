import { Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Home from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";
import Form from "./pages/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data" element={<Data />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
