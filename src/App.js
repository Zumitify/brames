import { Routes, Route } from "react-router-dom";
import Data from "./pages/Data";
import Home from "./pages/Home";
import IntroPage from "./pages/Intro/IntroPage";
import Form from "./pages/Form";
import Test from "./pages/Tests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/cities" element={<Home />} />
      <Route path="/data" element={<Data />} />
      <Route path="/form" element={<Form />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
