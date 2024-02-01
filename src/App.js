import "./App.css";
import Layout from "./component/common/layout";
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import About from "./about";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Layout>
  );
}

export default App;
